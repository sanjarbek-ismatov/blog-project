// base
const express = require("express");

const app = express();
const { log } = console;
const port = process.env.PORT || 5000;
require("./start/db")();
require("./start/routes")(app);
require("./start/logger")();
app.listen(port, () => {
  log("Server working in " + port);
});
