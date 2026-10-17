import React, { useState } from "react";
import ComplaintForm from "./components/ComplaintForm";
import CopilotChat from "./components/CopilotChat";
import { EMPTY_FORM } from "./constants";
import { mapResponseToForm } from "./utils";
import { storeComplaint } from "./components/complaintService";
import "./LogComplaintForm.css";

export default function LogComplaint() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [uploadedFile, setUploadedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(EMPTY_FORM);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSend = async () => {
        const text = input.trim();
        if (!text && !uploadedFile) return;

        setLoading(true);

        try {
            let response;

            // Case 1: plain text → send to /text endpoint
            if (text && !uploadedFile) {
                setMessages((prev) => [...prev, { text, sender: "user" }]);

                response = await fetch(`${API_URL}/text`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(text),
                });
            }

            // Case 2: file upload → send to /pdf endpoint
            if (uploadedFile) {
                setMessages((prev) => [
                    ...prev,
                    { text: `Uploaded file: ${uploadedFile.name}`, sender: "user" },
                ]);

                const formDataPayload = new FormData();
                formDataPayload.append("file", uploadedFile);

                response = await fetch(`${API_URL}/pdf`, {
                    method: "POST",
                    body: formDataPayload,
                });
            }

            if (!response.ok) throw new Error(`Server responded with ${response.status}`);

            const raw = await response.text();
            let data;
            try {
                data = JSON.parse(raw);
            } catch {
                data = { summary: raw };
            }

            setMessages((prev) => [
                ...prev,
                {
                    text: data.summary || data.message || data.reply || JSON.stringify(data),
                    sender: "ai",
                },
            ]);

            const updates = mapResponseToForm(data);
            if (Object.keys(updates).length > 0) {
                setFormData((prev) => ({ ...prev, ...updates }));
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { text: "Error contacting server: " + error.message, sender: "ai" },
            ]);
        } finally {
            setInput("");
            setUploadedFile(null);
            setLoading(false);
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
            setMessages((prev) => [
                ...prev,
                { text: `Uploaded file: ${file.name}`, sender: "user" },
            ]);
        }
    };

    const handleStoreComplaint = async () => {
        try {
            const result = await storeComplaint(formData); // send to server
            console.log("Complaint stored successfully:", result);
            alert("Complaint stored successfully!");
        } catch (error) {
            console.error("Error storing complaint:", error);
            alert("Failed to store complaint. Check console for details.");
        }
    };

    return (
        <div className="lc-page" style={{ height: "150vh" }}>
            <div className="container-fluid">
                <div className="row lc-row">
                    <ComplaintForm
                        formData={formData}
                        onChange={handleInputChange}
                        onSubmit={handleStoreComplaint}
                    />
                    <CopilotChat
                        messages={messages}
                        input={input}
                        setInput={setInput}
                        loading={loading}
                        onSend={handleSend}
                        onFileUpload={handleFileUpload}
                    />
                </div>
            </div>
        </div>
    );
}
