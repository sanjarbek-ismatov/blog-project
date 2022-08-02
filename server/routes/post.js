const express = require("express");
const Post = require("../models/getAllPost");
const { poster } = require("../start/validator");
const auth = require("../middleware/auth");
const _ = require("lodash");
const router = express.Router();
router.get("/", async (req, res) => {
  const result = await Post.find();
  res.status(200).send(result);
});
router.post("/create", auth, async (req, res) => {
  const { error } = poster(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  const post = await Post.createPost(req.body, _.pick(req.user, ["_id"]));
  res.status(201).send(post);
});
module.exports = router;
