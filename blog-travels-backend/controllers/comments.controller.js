const Comment = require("../models/comment.model");
const User = require("../models/user.model");
const Travel = require("../models/travel.model");

// Obtener todos los comentarios
module.exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({})
      .populate("travel")
      .populate("likes")
      .populate("dislikes")
      .populate("replies");
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

// Obtener un comentario por ID
module.exports.getCommentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id)
      .populate("travel")
      .populate("likes")
      .populate("dislikes")
      .populate("replies");
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

// Crear un nuevo comentario
module.exports.addComment = async (req, res, next) => {
  try {
    const { comment, travel } = req.body;
    const userId = req.user._id;
    
    const newComment = await Comment.create({
      comment,
      travel,
      createdBy: userId,
    });

    await User.findByIdAndUpdate(userId, { $push: { comments: newComment._id } });
    await Travel.findByIdAndUpdate(travel, { $push: { comments: newComment._id } });
    
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};

// Actualización completa de un comentario (PUT)
module.exports.putComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
};

// Actualización parcial de un comentario (PATCH)
module.exports.patchComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
};

// Eliminar un comentario
module.exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await User.findByIdAndUpdate(deletedComment.createdBy, { $pull: { comments: id } });
    await Travel.findByIdAndUpdate(deletedComment.travel, { $pull: { comments: id } });
    await Comment.deleteMany({ _id: { $in: deletedComment.replies } });

    res.status(200).json({ message: "Comment deleted successfully", comment: deletedComment });
  } catch (error) {
    next(error);
  }
};