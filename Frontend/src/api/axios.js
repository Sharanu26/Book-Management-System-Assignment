import axios from "axios";

const api = axios.create({
  baseURL: "https://book-management-system-assignment-4.onrender.com",
});

export default api;