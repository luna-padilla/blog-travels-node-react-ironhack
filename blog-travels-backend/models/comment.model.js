const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Usuarios que dieron like
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Usuarios que dieron dislike
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Comentarios anidados (1:N)
  travel: { type: mongoose.Schema.Types.ObjectId, ref: "Travel", required: true }, // Relación con Travel
}, {
  timestamps: { createdAt: 'created_at' },
  toJSON: {
    transform: function (doc, ret) {
      ret.id = doc._id; // Convierte _id a id
      delete ret._id; // Elimina _id del resultado
      delete ret.__v; // Opcional: elimina __v (control de versión)
      return ret;
    },
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;