const express = require("express");
const { createPost, Post } = require("../models/getAllPost");
const { poster } = require("../start/validator");
const auth = require("../middleware/auth");
const _ = require("lodash");
const getProfile = require("../start/getProfile");
const { upload } = require("../models/storage");
const authorValidator = require("../start/authorValidator");
const User = require("../models/UserModel");
const router = express.Router();
router.get("/", async (req, res) => {
  const result = await Post.find().sort("-date");
  res.status(200).send(result);
});
router.get("/page/:id", async (req, res) => {
  const data = await Post.find();
  const result = data.filter(
    (e) => e.title.toLowerCase().replace(/ /g, "-") === req.params.id
  );
  if (!result || result.length === 0) return null;
  const user = await User.findById(result[0].author);

  res.status(200).send({
    result,
    user,
  });
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
router.post("/create", [auth, upload.single("image")], async (req, res) => {
  const { error } = poster(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const post = await createPost(req.body, _.pick(req.user, ["_id"]), req.file);
  res.status(201).send(post);
});
module.exports = router;
