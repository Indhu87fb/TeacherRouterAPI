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
teacherRouter.get("/:id", (req, res) => {
  // const studentId = req.params.id;
  const { id = "" } = req.params;
  const requiredteacher = teachers.find(teacher => {
    if (parseInt(id) === teacher.id) return true;
    else return false;
  });
  if (requiredteacher) {
    res.status(200).json({ teacher: requiredteacher });
  } else {
    res.status(404).send("Not Found");
  }
});
teacherRouter.get("/", (req, res) => {
  res.status(200).json({ teachers });
});
module.exports = teacherRouter;
