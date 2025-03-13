const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  }, // Usuario que creó el comentario
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Usuarios que dieron like
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Usuarios que dieron dislike
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Comentarios anidados (1:N)
  travel: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Travel", 
    required: true 
  } // Relación con Travel
}, {
  timestamps: { createdAt: 'created_at' },
  toJSON: {
    transform: function (doc, ret) {
      ret.id = doc._id; 
      delete ret._id; 
      delete ret.__v; 
      return ret;
    },
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
