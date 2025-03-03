const mongoose = require("mongoose");


const travelSchema = new mongoose.Schema({
 image: { type: String, required: true },
 title: { type: String, required: true },
 subtitle: { type: String },
 description: { type: String, required: true },
 comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Relación 1:N con comentarios
}, { timestamps: { createdAt: 'created_at' } });


const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;