const mongoose = require("mongoose");
const { log } = console;
module.exports = () => {
  mongoose.connect("mongodb://localhost/social-media").then(() => {
    log("mongodb connected!");
  });
};
