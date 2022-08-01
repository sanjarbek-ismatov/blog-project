require("express-async-errors");
require("winston-mongodb");
const winston = require("winston");
module.exports = () => {
  winston.add(new winston.transports.Console());
  winston.add(
    new winston.transports.File({ filename: "error.log", level: "error" })
  );
  winston.add(
    new winston.transports.MongoDB({ db: "mongodb://localhost/social-media" })
  );
  winston.exceptions.handle(
    new winston.transports.File({ filename: "error.log", level: "error" })
  );
};

process.on("unhandledRejection", (ex) => {
  throw ex;
});
