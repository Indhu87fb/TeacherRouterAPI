const express = require("express");
const bodyParser = require("body-parser");

//const teacherRouter = require("./routers/teacherRouter");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});
const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
