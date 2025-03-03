require("dotenv").config();
const { cors } = require("./config/cors.config");
const logger = require("morgan");
const express = require("express");
const app = express();
const routes = require("./config/routes.config");
/*DB init */
require("./config/db.config");
// Middlewares
app.use(cors);
// fill req.body para que lo pueda usar el controlador
app.use(express.json());
//lee del obj req para registrar información sobre cada peticiòn HTTP y generar el log
app.use(logger("dev"));
// API Routes Configuration
app.use("/api/v1/", routes);
app.get("/prueba", (req, res) => {
  res.send("Estamos en la raíz");
});

// Routes
const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.info(`Application running at port ${port}`));
