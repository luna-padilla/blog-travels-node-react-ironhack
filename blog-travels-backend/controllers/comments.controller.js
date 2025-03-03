const Comment = require("../models/comment.model");

// Obtener todos los comentarios
module.exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("travel")
      .populate("likes")
      .populate("dislikes")
      .populate("replies");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error });
  }
};

// Obtener un comentario por ID
module.exports.getCommentById = async (req, res) => {
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
    res.status(500).json({ message: "Error retrieving comment", error });
  }
};

// Crear un nuevo comentario
module.exports.addComment = async (req, res) => {
  try {
    const { comment, likes, dislikes, replies, travel } = req.body;
    const newComment = await Comment.create({ comment, likes, dislikes, replies, travel });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

// Actualización completa de un comentario (PUT)
module.exports.putComment = async (req, res) => {
  try {
    const { id } = req.params;
    // Se espera que el body contenga todos los campos (reemplazo completo)
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Error updating comment", error });
  }
};

// Actualización parcial de un comentario (PATCH)
module.exports.patchComment = async (req, res) => {
  try {
    const { id } = req.params;
    // Solo se actualizan los campos enviados en el body
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Error partially updating comment", error });
  }
};

// Eliminar un comentario
module.exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully", comment: deletedComment });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};
