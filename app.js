const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Configurar middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Ruta GET
app.get("/", (req, res) => {
  res.send("GET request");
});

// Ruta POST
app.post("/", (req, res) => {
  res.send("POST request");
});

// Ruta PUT
app.put("/", (req, res) => {
  res.send("PUT request");
});

// Ruta DELETE
app.delete("/", (req, res) => {
  res.send("DELETE request");
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 6000");
});
