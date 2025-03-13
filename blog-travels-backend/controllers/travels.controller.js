const Travel = require("../models/travel.model");
const User = require("../models/user.model");
const Comment = require("../models/comment.model");
const createError = require("http-errors");

module.exports.getTravels = async (req, res, next) => {
  try {
    const travels = await Travel.find({});
    res.json(travels);
  } catch (error) {
    next(error);
  }
};

module.exports.getTravelById = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      throw createError(404, "Travel not found");
    }
    res.json(travel);
  } catch (error) {
    next(error);
  }
};

module.exports.getTravelByIdWithComments = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.id).populate("comments");
    if (!travel) {
      throw createError(404, "Travel not found");
    }
    res.json(travel);
  } catch (error) {
    next(error);
  }
};

module.exports.addTravel = async (req, res, next) => {
  try {
    const { image, title, subtitle, description } = req.body;
    const createdBy = req.user._id; // Se asume que el usuario está autenticado
    
    const newTravel = await Travel.create({ image, title, subtitle, description, createdBy });
    
    await User.findByIdAndUpdate(createdBy, { $push: { createdTravels: newTravel._id } });
    
    res.status(201).json(newTravel);
  } catch (error) {
    next(error);
  }
};

module.exports.putTravel = async (req, res, next) => {
  try {
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTravel) {
      throw createError(404, "Travel not found");
    }
    res.json(updatedTravel);
  } catch (error) {
    next(error);
  }
};

module.exports.patchTravel = async (req, res, next) => {
  try {
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTravel) {
      throw createError(404, "Travel not found");
    }
    res.json(updatedTravel);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTravel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTravel = await Travel.findByIdAndDelete(id);
    if (!deletedTravel) {
      throw createError(404, "Travel not found");
    }
    
    // Eliminar referencia en usuarios
    await User.updateMany({ createdTravels: id }, { $pull: { createdTravels: id } });
    
    // Eliminar comentarios asociados
    await Comment.deleteMany({ travel: id });
    
    res.json({ message: "Travel deleted successfully", travel: deletedTravel });
  } catch (error) {
    next(error);
  }
};