// complaintService.js
import axios from "axios";
// import API_URL from "../constants";
// const API_URL = ""; // replace with your backend endpoint

const API_URL = process.env.Server_API_URL; // Use the environment variable for the API URL
// const API_URL = "http://127.0.0.1:8000/api/complaints"; // replace with your backend endpoint

export async function storeComplaint(formData) {
  try {
    const response = await axios.post(`${API_URL}/complaints`, formData);
    return response.data;
  } catch (error) {
    console.error("Error storing complaint:", error);
    throw error;
  }
}
