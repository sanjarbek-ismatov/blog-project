// basez
const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
app.set("view engine", "ejs");
require("./start/logger")();
require("./start/db")();
require("./start/routes")(app);

app.listen(port, () => {
  console.log("Server working in " + port);
});
