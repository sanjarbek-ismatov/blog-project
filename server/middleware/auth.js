const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
module.exports = async (req, res, next) => {
  const token = req.header("x-token");
  if (!token) return res.status(403).send("Token mavjud emas");
  const decoded = jwt.verify(token, "VERYSTRONGKEY");
  if (!decoded)
    return res.status(403).send("Ro'yhatdan o'tmagan foydalanuvchi!");
  const user = await User.findById(decoded._id);
  if (!user) return res.status(403).send("Ro'yhatdan o'tmagan foydalanuvchi!");
  req.user = user._id;
  next();
};
