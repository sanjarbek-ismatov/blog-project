// base
const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
require("./start/logger")();
require("./start/db")();
require("./start/routes")(app);
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client/.next/server/pages", "index.html")
  );
});
app.listen(port, () => {
  console.log("Server working in " + port);
});
