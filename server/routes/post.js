const express = require("express");
const Post = require("../models/getAllPost");
const { poster, postValidator } = require("../start/validator");
const auth = require("../middleware/auth");
const _ = require("lodash");
const getProfile = require("../start/getProfile");

const authorValidator = require("../start/authorValidator");
const router = express.Router();
router.get("/", async (req, res) => {
  const result = await Post.find();
  res.status(200).send(result);
});
router.get("/:page", async (req, res) => {
  const { page } = req.params;
  const result = await Post.find()
    .skip((page - 1) * 10)
    .limit(10);
  res.status(200).send(result);
});
router.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = await getProfile(req.user, null);
  const result = authorValidator(id, user);

  if (!result) return res.status(401).send(false);

  await Post.findByIdAndDelete(result);
  res.send(true);
});
router.put("/update/:id", auth, async (req, res) => {
  const { id } = req.params;

  const user = await getProfile(req.user, null);

  const result = authorValidator(id, user);
  if (!result) return res.status(401).send(false);
  await Post.findByIdAndUpdate(result, req.body);
  res.status(200).send(true);
});
router.post("/create", auth, async (req, res) => {
  const { error } = poster(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  const post = await Post.createPost(req.body, _.pick(req.user, ["_id"]));
  res.status(201).send(post);
});
module.exports = router;
