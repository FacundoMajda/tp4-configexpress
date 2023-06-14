const express = require("express");
const router = express.Router();
const getController = require("../controllers/getController");
const postController = require("../controllers/postController");
const putController = require("../controllers/putController");
const deleteController = require("../controllers/deleteController");

// Ruta GET
router.get("/", getController.get);

// Ruta POST
router.post("/", postController.post);

// Ruta PUT
router.put("/", putController.put);

// Ruta DELETE
router.delete("/", deleteController.delete);

module.exports = router;
