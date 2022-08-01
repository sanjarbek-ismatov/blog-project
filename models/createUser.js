const User = require("./UserModel");
const bcrypt = require("bcrypt");

const _ = require("lodash");

async function createUser(body) {
  const user = new User(
    _.pick(body, ["username", "email", "password", "isAdmin"])
  );
  const salt = await bcrypt.genSalt();

  const password = await bcrypt.hash(body.password, salt);
  user.password = password;
  await user.save();
  return user;
}
module.exports = createUser;
