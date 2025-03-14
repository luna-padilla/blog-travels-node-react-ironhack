const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const travels = require("../controllers/travels.controller");
const comments = require("../controllers/comments.controller");
const users = require("../controllers/users.controller");
const auth = require("../middlewares/session.middleware");
const sessions = require("../controllers/sessions.controller");
const storage = require("./storage.config");
const mongoose = require("mongoose");

/* Users */
router.post("/users", storage.single("avatar"), users.create);
router.get("/users/:id/travels", auth.isAuthenticated, users.getUserTravels);
router.patch("/users/me", auth.isAuthenticated, users.update);
router.get("/users/me", auth.isAuthenticated, users.profile);
router.get("/users/:id/validate", users.validate);

/* Sessions */
router.post("/sessions", sessions.create);
router.delete("/sessions", auth.isAuthenticated, sessions.destroy);

// Travels
router.post("/travels", travels.addTravel);
router.get("/travels", travels.getTravels);
router.get("/travels/search", travels.searchTravels);
router.get("/travels/:id", travels.getTravelById);
router.get("/travels/:id/comments", travels.getTravelByIdWithComments);
router.put("/travels/:id", travels.putTravel);
router.patch("/travels/:id", travels.patchTravel);
router.delete("/travels/:id", travels.deleteTravel);

//Comments
router.get("/comments", comments.getComments);
router.get("/comments/:id", comments.getCommentById);
router.post("/comments",auth.isAuthenticated, comments.addComment);
router.put("/comments/:id", comments.putComment);
router.patch("/comments/:id", comments.patchComment);
router.delete("/comments/:id", comments.deleteComment);


router.use((req, res, next) => {
    next(createError(404, "Route not found"));
  });
  
  router.use((error, req, res, next) => {
    if (
      error instanceof mongoose.Error.CastError &&
      error.message.includes("_id")
    )
      error = createError(404, "Resource not found");
    else if (error instanceof mongoose.Error.ValidationError)
      error = createError(400, error);
    else if (!error.status) error = createError(500, error.message);
    console.error(error);
  
    const data = {};
    data.message = error.message;
    if (error.errors) {
      data.errors = Object.keys(error.errors).reduce((errors, errorKey) => {
        errors[errorKey] =
          error.errors[errorKey]?.message || error.errors[errorKey];
        return errors;
      }, {});
    }
    res.status(error.status).json(data);
  });

module.exports = router;