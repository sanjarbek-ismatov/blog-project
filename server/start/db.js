const mongoose = require("mongoose");
const { log } = console;
module.exports = async () => {
  await mongoose.connect(process.env.MONGO_URL).then(() => {
    log("mongodb connected!");
  });
};
