const express = require("express");
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee");
const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);
app.listen(4500, function () {
  console.log("Server is started at port 4500");
});
