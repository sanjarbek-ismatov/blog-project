const express = require("express");
const router = express.Router();
const createUser = require("../models/createUser");
const { postValidator } = require("../start/validator");
const _ = require("lodash");
const passwordComplexity = require("joi-password-complexity");
const User = require("../models/UserModel");
const passwordOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};
router.post("/", async (req, res) => {
  const { error } = postValidator(
    _.pick(req.body, ["username", "lastname", "email", "password"])
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
  const findEmail = await User.findOne({ email: req.body.email });
  if (findEmail) {
    return res.status(401).send("Email allaqachon olingan!");
  }
  const newUser = await createUser(req.body);
  res.status(201).send(_.pick(newUser, ["username", "lastname", "email"]));
});

module.exports = router;
