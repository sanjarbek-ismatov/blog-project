const _ = require("lodash");
const User = require("./UserModel");
const jwt = require("jsonwebtoken");
async function loginUser(body) {
  const user = await User.findOne({ email: body.email });
  if (!user) return;
  return jwt.sign({ _id: user._id }, "VERYSTRONGKEY");
}
module.exports = loginUser;
