const express = require("express");
const app = express();

var Router = require("./router/index");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", Router);

app.listen("8111", function () {
  console.log("The server is running at *: 8111");
});
