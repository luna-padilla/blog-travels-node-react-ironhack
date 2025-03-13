const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  }, // Usuario que creó el viaje
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Comment" 
  }] // Relación 1:N con comentarios
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

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;
