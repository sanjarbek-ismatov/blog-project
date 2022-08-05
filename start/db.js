const mongoose = require("mongoose");
const { log } = console;
module.exports = () => {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    log("mongodb connected!");
  });
};
