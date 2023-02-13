const _ = require("lodash");
const User = require("./UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function loginUser(body) {
  const user = await User.findOne({ email: body.email });
  if (!user) return;
  const passwordCheck = await bcrypt.compare(body.password, user.password);
  if (!passwordCheck) return;
  return jwt.sign({ _id: user._id }, "VERYSTRONGKEY");
}
module.exports = loginUser;
