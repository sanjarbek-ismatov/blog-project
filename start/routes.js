const error = require("../middleware/error");
const express = require("express");
const postUser = require("../routes/postUser");
module.exports = (app) => {
  app.use(express.json());
  app.use("/post", postUser);

  app.use(error);
};
