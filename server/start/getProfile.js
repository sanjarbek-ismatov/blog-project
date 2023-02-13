const User = require("../models/UserModel");
const { Post } = require("../models/getAllPost");
module.exports = async (id, username) => {
  if (id) {
    const user = await User.findById(id).select("-posts");

    const posts = await Post.find({ author: user._id });
    return { user: user, posts: posts };
  } else if (username) {
    const user = await User.findOne({ username: username }).select("-posts");
    if (!user) return;
    const posts = await Post.find({ author: user._id });
    return { user: user, posts: posts };
  }
};
