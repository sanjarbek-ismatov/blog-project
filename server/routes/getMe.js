const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
router.get("/", auth, async (req, res) => {
  const { user } = req;
  res.status(200).send(user);
});
module.exports = router;
