const express = require("express");
const router = express.Router();
const {
  deleteController,
  getController,
  postController,
  putController,
} = require("../controllers/controllers.js");

// Ruta GET
router.get("/", async (req, res) => {
  try {
    const resultado = await getController(req, res);
    res.send(resultado);
    console.log("Éxito en la solicitud GET");
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    res.status(500).send("Error en la solicitud GET");
  }
});

// Ruta POST
router.post("/", async (req, res) => {
  try {
    const resultado = await postController(req, res);
    res.send(resultado);
    console.log("Éxito en la solicitud POST");
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).send("Error en la solicitud POST");
  }
});

// Ruta PUT
router.put("/", async (req, res) => {
  try {
    const resultado = await putController(req, res);
    res.send(resultado);
    console.log("Éxito en la solicitud PUT");
  } catch (error) {
    console.error("Error en la solicitud PUT:", error);
    res.status(500).send("Error en la solicitud PUT");
  }
});

// Ruta DELETE
router.delete("/", async (req, res) => {
  try {
    const resultado = await deleteController(req, res);
    res.send(resultado);
    console.log("Éxito en la solicitud DELETE");
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
    res.status(500).send("Error en la solicitud DELETE");
  }
});

module.exports = router;
