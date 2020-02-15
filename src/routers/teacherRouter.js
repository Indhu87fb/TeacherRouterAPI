const express = require("express");
const teachers = require("../models/Teachers");
const teacherRouter = express.Router();

teacherRouter.post("/", (req, res) => {
  if (req.body.id && req.body.firstName) {
    teachers.push(req.body);
    req.status(200).json({ message: "Teacher created successfully" });
  } else {
    res.status(400).send("Bad Request");
  }
});
teacherRouter.get("/", (req, res) => {
  res.status(200).json({ teachers });
});
