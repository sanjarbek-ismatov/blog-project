const mongoose = require("mongoose");
const User = require("../models/UserModel");
const postSchema = new mongoose.Schema({
  title: String,
  date: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
  author: mongoose.SchemaTypes.ObjectId,
  content: String,
  image: String,
  likeCount: { type: Number, default: 0 },
});

const Post = mongoose.model("post", postSchema);
module.exports.createPost = async function createPost(
  { title, content },
  author,
  file
) {
  const post = await new Post({
    title,
    content,
    image: file.filename,
    author,
  });
  const user = await User.findById(author);
  user.posts.push(post._id);
  await user.save();
  await post.save();
  return post;
};
module.exports.Post = Post;
