//Facundo A. Majda
//TLP1 - IPF 2023
//tp4-facundo-majda Configuracion de servidor express+

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes/index");

const app = express();

// Configurar middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Configurar las rutas
app.use("/api", routes);

// errores
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Error en el servidor");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
