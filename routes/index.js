const express = require("express");
const router = express.Router();
const {
  deleteController,
  getController,
  postController,
  putController,
} = require("../controllers/controllers.js");

// Ruta GET
router.get("/", getController.getController);

// Ruta POST
router.post("/", postController.postController);

// Ruta PUT
router.put("/", putController.putController);

// Ruta DELETE
router.delete("/", deleteController.deleteController);

module.exports = router;
