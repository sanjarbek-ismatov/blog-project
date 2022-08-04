const express = require("express");
const auth = require("../middleware/auth");
const getProfile = require("../start/getProfile");
const router = express.Router();
router.get("/", auth, async (req, res) => {
  const profile = await getProfile(req.user, null);

  res.status(200).send(profile);
});
module.exports = router;
