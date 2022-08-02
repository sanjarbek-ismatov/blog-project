const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  author: new mongoose.Types.ObjectId(),
  content: String,
  image: String,
  likeCount: Number,
  comments: {
    user: new mongoose.Types.ObjectId(),
    body: String,
    date: {
      type: Date,
      default: Date.now(),
    },
  },
});
const Post = mongoose.model("post", postSchema);
async function createPost(
  { title, content, image, author, likeCount },
  { user, body }
) {
  const post = await new Post({
    title: title,
    content: content,
    image: image,
    author: author,
    likeCount: likeCount,
    comments: {
      user: user,
      body: body,
    },
  });
  await post.save();
  return post;
}
module.exports = Post;
module.exports.createPost = createPost;
