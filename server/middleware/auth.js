const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  req.header("x-token");
  const decoded = jwt.verify(req.header("x-token"), "VERYSTRONGKEY");
  if (!decoded)
    return res.status(403).send("Ro'yhatdan o'tmagan foydalanuvchi!");
  req.user = decoded;
  next();
};
