const winston = require("winston");
module.exports = (err, req, res, next) => {
  winston.error(err.message, err);
  if (err) {
    return res.status(500).send("serverda xato yuz berdi!");
  }
  next();
};
