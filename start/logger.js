require("express-async-errors");

const winston = require("winston");
module.exports = () => {
  winston.add(new winston.transports.Console());
  winston.add(
    new winston.transports.File({ filename: "error.json", level: "error" })
  );

  winston.exceptions.handle(
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.json", level: "error" })
  );
};

process.on("unhandledRejection", (ex) => {
  throw ex;
});
