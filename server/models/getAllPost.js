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
async function createPost({ title, content }, author, file) {
  const post = await new Post({
    title: title,
    content: content,
    image: file.filename,
    author: author,
  });

  await post.save();

  const user = await User.findById(author);

  user.posts.push(post._id);
  await user.save();
  return post;
}
module.exports = Post;
module.exports.createPost = createPost;
