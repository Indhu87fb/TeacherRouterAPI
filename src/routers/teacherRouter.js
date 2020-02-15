const express = require("express");
const teachers = require("../models/Teachers");
const teacherRouter = express.Router();

teacherRouter.post("/", (req, res) => {
  if (req.body.id && req.body.firstName) {
    teachers.push(req.body);
    req.status(200).json({ message: "Teacher created successfully" });
  }
});
