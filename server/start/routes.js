const error = require("../middleware/error");
const express = require("express");
const postUser = require("../routes/postUser");
const loginUser = require("../routes/loginUser");
const posts = require("../routes/post");
const getMe = require("../routes/getMe");
const profile = require("../routes/profile");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/post", postUser);
  app.use("/api/login", loginUser);
  app.use("/api/get/post", posts);
  app.use("/api/profile/me", getMe);
  app.use("/api/profile", profile);

  app.use(error);
};
