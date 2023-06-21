// Función para la solicitud POST
exports.postController = (req, res) => {
  try {
    res.status(200).send("POST request");
    console.log("Éxito en la solicitud POST");
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    res.status(500).send("Error en la solicitud POST");
  }
};

// Función para la solicitud GET
exports.getController = (req, res) => {
  try {
    res.status(200).send("GET request");
    console.log("Éxito en la solicitud GET");
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    res.status(500).send("Error en la solicitud GET");
  }
};

// Función para la solicitud DELETE
exports.deleteController = (req, res) => {
  try {
    res.status(200).send("DELETE request");
    console.log("Éxito en la solicitud DELETE");
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
    res.status(500).send("Error en la solicitud DELETE");
  }
};

// Función para la solicitud PUT
exports.putController = (req, res) => {
  try {
    res.status(200).send("PUT request");
    console.log("Éxito en la solicitud PUT");
  } catch (error) {
    console.error("Error en la solicitud PUT:", error);
    res.status(500).send("Error en la solicitud PUT");
  }
};
