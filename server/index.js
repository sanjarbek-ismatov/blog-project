// base
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;
require("./start/logger")();
require("./start/db")();
require("./start/routes")(app);

app.listen(port, () => {
  console.log("Server working in " + port);
});
