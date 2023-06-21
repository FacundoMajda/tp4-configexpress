const express = require("express");
const router = express.Router();
const {
  deleteController,
  getController,
  postController,
  putController,
} = require("../controllers/controllers.js");

router.get("/", getController);
router.post("/", postController);
router.put("/", putController);
router.delete("/", deleteController);

module.exports = router;
