const express = require("express");
const teachers = require("../models/Teachers");
const teachersRouter = express.Router();
teachersRouter.get("/", (req, res) => {
  res.status(200).json({ teachers });
});

module.exports = teachersRouter;
