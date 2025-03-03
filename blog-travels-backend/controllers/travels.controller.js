const Travel = require("../models/travel.model");
module.exports.getTravels = (req, res, next) => {
  Travel.find({})
    .then((travels) => res.send(travels))
    .catch((err) => console.error(err));
};

module.exports.getTravelById = (req, res, next) => {
  const { id } = req.params;

  Travel.findById(id)
    .then((travel) => {
      if (!travel) {
        return res.status(404).json({ message: "Travel not found" });
      }
      res.json(travel);
    })
    .catch((err) => next(err));
};

module.exports.addTravel = (req, res, next) => {
  const { image, title, subtitle, description, comments } = req.body;

  Travel.create({ image, title, subtitle, description, comments })
    .then((travel) => res.status(201).json(travel))
    .catch((err) => next(err));
};
module.exports.putTravel = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID de la URL
    const updateData = req.body; // Datos a actualizar

    // Encuentra y actualiza el viaje
    const updatedTravel = await Travel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTravel) {
      return res.status(404).json({ message: "Travel not found" });
    }

    res.status(200).json(updatedTravel);
  } catch (error) {
    res.status(500).json({ message: "Error updating travel", error });
  }
};

module.exports.patchTravel = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID del viaje de la URL
    const updateData = req.body; // Datos que se quieren actualizar (parcialmente)

    const updatedTravel = await Travel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedTravel) {
      return res.status(404).json({ message: "Travel not found" });
    }
    res.status(200).json(updatedTravel);
  } catch (error) {
    res.status(500).json({ message: "Error updating travel", error });
  }
};

module.exports.deleteTravel = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID del viaje de la URL

    const deletedTravel = await Travel.findByIdAndDelete(id);
    if (!deletedTravel) {
      return res.status(404).json({ message: "Travel not found" });
    }
    res
      .status(200)
      .json({ message: "Travel deleted successfully", travel: deletedTravel });
  } catch (error) {
    res.status(500).json({ message: "Error deleting travel", error });
  }
};
