const error = require("../middleware/error");
module.exports = (app) => {
  app.use(error);
};
