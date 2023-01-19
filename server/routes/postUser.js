const express = require("express");
const router = express.Router();
const createUser = require("../models/createUser");
const { postValidator } = require("../start/validator");
const _ = require("lodash");
const passwordComplexity = require("joi-password-complexity");
const User = require("../models/UserModel");
const { upload } = require("../models/storage");
const passwordOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};
router.post("/", upload.single("image"), async (req, res) => {
  const { error } = postValidator(
    _.pick(req.body, [
      "username",
      "image",
      "lastname",
      "email",
      "password",
      "firstname",
    ])
  );
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const result = passwordComplexity(passwordOptions, "password").validate(
    req.body.password
  );
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const findEmail = await User.findOne({
    email: req.body.email,
  });
  const findUser = await User.findOne({
    username: req.body.username,
  });
  if (findEmail || findUser) {
    return res.status(403).send("Email yoki username allaqachon olingan!");
  }
  await createUser(req.body, req.file);
  res.status(201).send("Ro'yhatdan o'tdingiz");
});

module.exports = router;
