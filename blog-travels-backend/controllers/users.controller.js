// const createError = require("http-errors");
// const User = require("../models/user.model");
// const { sendValidationEmail } = require("../config/mailer.config");

// module.exports.create = (req, res, next) => {
//   const { email } = req.body;

//   User.findOne({ email })
//     .then((user) => {
//       if (user) {
//         next(
//           createError(400, {
//             message: "User email already taken",
//             errors: { email: "Already exists" },
//           })
//         );
//       } else {
//         return User.create({
//           email: req.body.email,
//           password: req.body.password,
//           name: req.body.name,
//           avatar: req.file?.path,
//         }).then((user) => {
//           sendValidationEmail(user);

//           res.status(201).json(user);
//         });
//       }
//     })
//     .catch((error) => next(error));
// };

// module.exports.update = (req, res, next) => {
//   const permittedBody = {
//     email: req.body.email,
//     password: req.body.password,
//     name: req.body.name,
//     avatar: req.body.avatar,
//   };

//   // remove undefined keys
//   Object.keys(permittedBody).forEach((key) => {
//     if (permittedBody[key] === undefined) {
//       delete permittedBody[key];
//     }
//   });

//   // merge body into req.user object
//   Object.assign(req.user, permittedBody);

//   req.user
//     .save()
//     .then((user) => res.json(user))
//     .catch(next);
// };

// module.exports.validate = (req, res, next) => {
//   User.findOne({ _id: req.params.id, activateToken: req.query.token })
//     .then((user) => {
//       if (user) {
//         user.active = true;
//         user.save().then((user) => res.json(user));
//       } else {
//         next(createError(404, "User not found"));
//       }
//     })
//     .catch(next);
// };

// module.exports.profile = (req, res, next) => {
//   res.json(req.user);
// };

// module.exports.getUserTravels = (req, res, next) => {
//   const { id } = req.params;

//   User.findById(id)
//     .populate("travels") // Trae los viajes del usuario con los datos completos
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
//       res.json(user.travels);
//     })
//     .catch(next);
// };

const createError = require("http-errors");
const User = require("../models/user.model");
const { sendValidationEmail } = require("../config/mailer.config");

module.exports.create = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const avatar = req.file?.path;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw createError(400, {
        message: "User email already taken",
        errors: { email: "Already exists" },
      });
    }

    const newUser = await User.create({ email, password, name, avatar });
    sendValidationEmail(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const updates = ["email", "password", "name", "avatar"].reduce(
      (acc, field) => {
        if (req.body[field] !== undefined) acc[field] = req.body[field];
        return acc;
      },
      {}
    );

    Object.assign(req.user, updates);
    const updatedUser = await req.user.save();
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.validate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { token } = req.query;

    const user = await User.findOne({ _id: id, activateToken: token });
    if (!user) {
      throw createError(404, "User not found");
    }

    user.active = true;
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports.profile = (req, res) => {
  res.json(req.user);
};

module.exports.getUserTravels = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).populate("createdTravels");
    console.log("User found:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.createdTravels || []);
  } catch (error) {
    next(error);
  }
};
