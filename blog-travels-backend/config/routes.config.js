const express = require("express");
const router = express.Router();
// const createError = require("http-errors");
const travels = require("../controllers/travels.controller");
const comments = require("../controllers/comments.controller");
const users = require("../controllers/users.controller");
const auth = require("../middlewares/session.middleware");
const sessions = require("../controllers/sessions.controller");

/* Users */
router.post("/users", users.create);
router.patch("/users/me", auth.isAuthenticated, users.update);
router.get("/users/me", auth.isAuthenticated, users.profile);
router.get("/users/:id/validate", users.validate);

/* Sessions */
router.post("/sessions", sessions.create);
router.delete("/sessions", auth.isAuthenticated, sessions.destroy);

// Travels
router.get("/travels", travels.getTravels);
router.get("/travels/:id", travels.getTravelById);
router.post("/travels", travels.addTravel);
router.put("/travels/:id", travels.putTravel);
router.patch("/travels/:id", travels.patchTravel);
router.delete("/travels/:id", travels.deleteTravel);

//Comments
router.get("/comments", comments.getComments);
router.get("/comments/:id", comments.getCommentById);
router.post("/comments", comments.addComment);
router.put("/comments/:id", comments.putComment);
router.patch("/comments/:id", comments.patchComment);
router.delete("/comments/:id", comments.deleteComment);

module.exports = router;