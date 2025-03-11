const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Relación 1:N con comentarios
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

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;