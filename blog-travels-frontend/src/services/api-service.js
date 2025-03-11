import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || "http://localhost:3000/api/v1",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

// Users
const profile = () => http.get("/users/me");
const register = (user) => http.post("/users", user);
const login = (user) => http.post("/sessions", user);
const destroySession = () => http.delete("/sessions");
const updateUser = (data) => http.patch("/users/me", data);

// Travels
const getTravels = () => http.get("/travels");
const getTravelById = (id) => http.get(`/travels/${id}`);
const addTravel = (data) => http.post("/travels", data);
const getTravelsByCategory = (category) =>
  http.get("/travels", { params: { category } });

// Comments
const getComments = () => http.get("/comments");

export {
  profile,
  register,
  login,
  destroySession,
  getTravels,
  getTravelById,
  addTravel,
  getComments,
  updateUser,
  getTravelsByCategory,
};
