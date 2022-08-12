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
  comments: {
    user: mongoose.SchemaTypes.ObjectId,
    body: String,
    date: {
      type: Date,
      default: () => {
        return this.user && Date.now();
      },
    },
  },
});
const Post = mongoose.model("post", postSchema);
async function createPost({ title, content, image }, author) {
  const post = await new Post({
    title: title,
    content: content,
    image: image,
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
