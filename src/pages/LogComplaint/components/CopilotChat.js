import React, { useRef, useEffect } from "react";
import { FaPaperclip, FaFilePdf } from "react-icons/fa";

export default function CopilotChat({
  messages,
  input,
  setInput,
  loading,
  onSend,
  onFileUpload,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  

  return (
    <div className="col-lg-4 col-md-5 col-sm-12 d-flex flex-column lc-right">
      <div className="copilot-chat lc-chat h-100 d-flex flex-column">
        <div className="card-header lc-card-header">
          <h5 className="mb-0">AIVOA Copilot Chat</h5>
        </div>

        <div className="card-body d-flex flex-column flex-grow-1 p-3 overflow-hidden">
          <div className="lc-chat-messages flex-grow-1 mb-3 rounded p-3 overflow-auto d-flex flex-column">
            <div className="mt-auto">
              {messages.length === 0 ? (
                <p className="text-muted mb-0">Chat output will appear here...</p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`lc-msg ${
                      msg.sender === "user" ? "lc-msg-user" : "lc-msg-ai"
                    }`}
                  >
                    <strong>{msg.sender === "user" ? "You: " : "AI: "}</strong>
                    {msg.text}
                  </div>
                ))
              )}
              {loading && <div className="lc-msg lc-msg-ai lc-typing">AI is analysing…</div>}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="input-group lc-chat-input">
            <button className="btn lc-icon-btn" type="button">
              <FaPaperclip />
            </button>
            <label className="btn lc-icon-btn mb-0">
              <FaFilePdf />
              <input
                type="file"
                accept="application/pdf"
                hidden
                onChange={onFileUpload}
              />
            </label>
            <input
              type="text"
              className="form-control lc-input"
              placeholder="Type a message or paste a complaint..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
            />
            <button
              className="btn lc-btn lc-send-btn"
              onClick={onSend}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}