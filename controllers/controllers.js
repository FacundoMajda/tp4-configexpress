// Controlador para la solicitud POST
exports.postController = (req, res) => {
  try {
    res.send("POST request");
    console.log("Éxito en la solicitud POST");
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).send("Error en la solicitud POST");
  }
};

// Controlador para la solicitud GET
exports.getController = (req, res) => {
  try {
    res.send("GET request");
    console.log("Éxito en la solicitud GET");
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    res.status(500).send("Error en la solicitud GET");
  }
};

// Controlador para la solicitud DELETE
exports.deleteController = (req, res) => {
  try {
    res.send("DELETE request");
    console.log("Éxito en la solicitud DELETE");
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
    res.status(500).send("Error en la solicitud DELETE");
  }
};

// Controlador para la solicitud PUT
exports.putController = (req, res) => {
  try {
    res.send("PUT request");
    console.log("Éxito en la solicitud PUT");
  } catch (error) {
    console.error("Error en la solicitud PUT:", error);
    res.status(500).send("Error en la solicitud PUT");
  }
};
