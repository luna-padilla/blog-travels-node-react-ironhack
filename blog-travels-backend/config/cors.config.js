const cors = require("cors");
const CORS_ORIGINS = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((origin) => {
    return origin.trim();
  });
module.exports.cors = cors({
  origin: process.env.CORS_ORIGINS,
  credentials: true,
});
