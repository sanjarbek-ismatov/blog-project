const mongoose = require("mongoose");
const { log } = console;
module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://sanjarbek:09122005I$a@cluster0.tx3g4ok.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      log("mongodb connected!");
    });
};
