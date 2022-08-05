const express = require("express");
const getProfile = require("../start/getProfile");
const router = express.Router();
router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const profile = await getProfile(null, username);
  if (!profile) return res.status(404).send("Foydalanuvchi topilmadi!");
  res.status(200).send(profile);
});
module.exports = router;
