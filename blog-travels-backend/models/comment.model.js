const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
 comment: { type: String, required: true },
 likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Usuarios que dieron like
 dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Usuarios que dieron dislike
 replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Comentarios anidados (1:N)
 travel: { type: mongoose.Schema.Types.ObjectId, ref: "Travel", required: true }, // Relación con Travel
}, { timestamps: { createdAt: 'created_at' } });


const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
