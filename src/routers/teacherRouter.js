const express = require("express");
const teachers = require("../models/Teachers");
const teacherRouter = express.Router();

teacherRouter.post("/", (req, res) => {
  if (req.body.firstName && req.body.lastName) {
    teachers.push(req.body);
    res.status(200).json({ message: "teacher created successfully" });
  } else {
    res.status(400).send("Bad Request");
  }
});
teacherRouter.get("/:id", (req, res) => {
  // const teacherId = req.params.id;
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

teacherRouter.patch("/:id", (req, res) => {
  const { id } = req.params;

  let requiredTeacherIndex;
  const requiredTeacher = teachers.find((teacher, teacherIndex) => {
    if (parseInt(id) === teacher.id) {
      requiredTeacherIndex = teacherIndex;
      return true;
    }
    return false;
  });

  if (requiredTeacher) {
    const {
      firstName = requiredTeacher.firstName,
      lastName = requiredTeacher.lastName,
      age = requiredTeacher.age,
      gender = requiredTeacher.gender,
      qualification = requiredTeacher.qualification
    } = req.body;
    teachers[requiredTeacherIndex] = {
      id: requiredTeacher.id,
      firstName,
      lastName,
      age,
      gender,
      qualification
    };
    res.status(200).json({ message: "TEACHERS details updated" });
  } else {
    res.status(400).send("Bad Request");
  }
});

teacherRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  let requiredTeacherIndex;
  const requiredTeacher = teachers.find((teacher, teacherIndex) => {
    if (parseInt(id) === teacher.id) {
      requiredTeacherIndex = teacherIndex;
      return true;
    }
    return false;
  });
  if (requiredTeacher) {
    teachers.splice(requiredTeacherIndex, 1);
    res.status(200).json({ message: "Teacher has been deleted" });
  } else {
    res.status(400).send("Bad Request");
  }
});

teacherRouter.get("/", (req, res) => {
  res.status(200).json({ teachers });
});
module.exports = teacherRouter;
