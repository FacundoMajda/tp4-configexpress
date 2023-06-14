const express = require("express");

const { Router } = require("express");
const {
  deleteTask,
  getTasks,
  getTasksById,
  postTask,
  putTask,
} = require("../controllers/tasks.controller");

// Ruta GET
router.get("/tasks", getTasks.get);

// Ruta POST
router.post("/tasks", postTask.post);

// Ruta PUT
router.put("/tasks", putTask.put);

// Ruta DELETE
router.delete("/", deleteTask.delete);

module.exports = router;
