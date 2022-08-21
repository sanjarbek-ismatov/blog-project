const express = require("express");
const loginUser = require("../models/loginUser");
const { loginValidator } = require("../start/validator");
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = loginValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const token = await loginUser(req.body);
  if (!token) {
    return res.status(400).send("foydalanuvchi topilmadi!");
  }
  res.status(200).header("x-token", token).send("Login bajarildi!");
});
module.exports = router;
