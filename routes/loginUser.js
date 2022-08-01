const express = require("express");
const loginUser = require("../models/loginUser");
const { loginValidator } = require("../start/validator");
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = loginValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await loginUser(req.body);
  if (!user) {
    return res.status(400).send("foydalanuvchi topilmadi!");
  }
  res.status(200).header("x-token", user).send("Login bajarildi!");
});
module.exports = router;
