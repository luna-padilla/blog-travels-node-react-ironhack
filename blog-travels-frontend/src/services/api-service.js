import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1/";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Si usas sesiones y cookies
});

// Users
export const createUser = (data) => api.post("/users", data);
export const updateUser = (data) => api.patch("/users/me", data);
export const getUserProfile = () => api.get("/users/me");
export const validateUser = (id) => api.get(`/users/${id}/validate`);

// Sessions
export const createSession = (data) => api.post("/sessions", data);
export const destroySession = () => api.delete("/sessions");

// Travels
export const getTravels = () => api.get("/travels");
export const getTravelById = (id) => api.get(`/travels/${id}`);
export const addTravel = (data) => api.post("/travels", data);

// Comments
export const getComments = () => api.get("/comments");

export default api;