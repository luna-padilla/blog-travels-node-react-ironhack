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
const getTravelByIdWithComments = (id) => http.get(`/travels/${id}/comments`);
const addTravel = (data) => http.post("/travels", data);
const updateTravel = (id, data) => http.put(`/travels/${id}`, data);
const deleteTravel = (id) => http.delete(`/travels/${id}`);
const getTravelsByCategory = (category) =>
  http.get("/travels", { params: { category } });
const getUserTravels = (userId) => http.get(`/users/${userId}/travels`);

// Comments
const getComments = () => http.get("/comments");
const getCommentsByTravel = (travelId) => http.get(`/travels/${travelId}/comments`)
  .then((data) => data.comments || []); // Asegura que siempre sea un array

const addComment = (commentData) => {
  return http.post(`/comments`, commentData);
};

export {
  profile,
  register,
  login,
  destroySession,
  getTravels,
  getTravelById,
  getTravelByIdWithComments,
  addTravel,
  updateTravel,
  deleteTravel,
  getComments,
  updateUser,
  getTravelsByCategory,
  getUserTravels,
  getCommentsByTravel,
  addComment,
};