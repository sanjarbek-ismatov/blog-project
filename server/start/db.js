const mongoose = require("mongoose");
const { log } = console;
module.exports = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    log("mongodb connected!");
  });
};
