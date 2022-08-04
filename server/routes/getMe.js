const express = require("express");
const auth = require("../middleware/auth");
const Post = require("../models/getAllPost");
const User = require("../models/UserModel");
const router = express.Router();
router.get("/", auth, async (req, res) => {
  const profile = await User.findById(req.user).select("-posts");
  const posts = await Post.find({ author: profile._id });
  res.status(200).send({ user: profile, posts: posts });
});
module.exports = router;
