const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.create = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(
        createError(401, {
          message: "Bad credentials",
          errors: { email: "Invalid email or password" },
        })
      );
    }

    const match = await user.checkPassword(password);

    if (!match) {
      return next(
        createError(401, {
          message: "Bad credentials",
          errors: { email: "Invalid email or password" },
        })
      );
    }

    // if (!user.active) {
    //   return next(createError(401, "user not active"));
    // }

    req.session.userId = user.id;
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports.destroy = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err); // Maneja el error con Express
    }
    res.status(204).send(); // Logout exitoso, sin contenido
  });
};

