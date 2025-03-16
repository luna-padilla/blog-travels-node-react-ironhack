const Travel = require("../models/travel.model");
const User = require("../models/user.model");
const Comment = require("../models/comment.model");
const createError = require("http-errors");

// module.exports.getTravels = async (req, res, next) => {
//   try {
//     const travels = await Travel.find({});
//     res.json(travels);
//   } catch (error) {
//     next(error);
//   }
// };


module.exports.getTravels = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; // Página actual (por defecto 1)
    const limit = parseInt(req.query.limit) || 10; // Límite de documentos por página (por defecto 10)
    const skip = (page - 1) * limit; // Calcular el número de documentos a saltar

    const travels = await Travel.find({})
      .skip(skip)
      .limit(limit);

    const totalTravels = await Travel.countDocuments({}); // Obtener el total de documentos

    res.json({
      travels,
      total: totalTravels,
      page,
      limit,
      totalPages: Math.ceil(totalTravels / limit),
    });
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

module.exports.searchTravels = async (req, res, next) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    const travels = await Travel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { subtitle: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } }
      ]
    });

    res.json(travels);
  } catch (error) {
    next(error);
  }
};

module.exports.getTravelByIdWithComments = async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.id).populate({
      path: "comments",
      populate: {
        path: "createdBy",
        select: "name avatar", // Solo traemos name y avatar
      },
    });
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

    const newTravel = await Travel.create({
      image,
      title,
      subtitle,
      description,
      createdBy,
    });

    await User.findByIdAndUpdate(createdBy, {
      $push: { createdTravels: newTravel._id },
    });

    res.status(201).json(newTravel);
  } catch (error) {
    next(error);
  }
};

module.exports.putTravel = async (req, res, next) => {
  try {
    const updatedTravel = await Travel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
    const updatedTravel = await Travel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
    await User.updateMany(
      { createdTravels: id },
      { $pull: { createdTravels: id } }
    );

    // Eliminar comentarios asociados
    await Comment.deleteMany({ travel: id });

    res.json({ message: "Travel deleted successfully", travel: deletedTravel });
  } catch (error) {
    next(error);
  }
};
