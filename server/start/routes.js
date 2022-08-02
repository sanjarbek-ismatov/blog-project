const error = require("../middleware/error");
const express = require("express");
const postUser = require("../routes/postUser");
const loginUser = require("../routes/loginUser");
const posts = require("../routes/post");
module.exports = (app) => {
  app.use(express.json());
  app.use("/api/post", postUser);
  app.use("/api/login", loginUser);
  app.use("/api/get/post", posts);
  app.use(error);
};
