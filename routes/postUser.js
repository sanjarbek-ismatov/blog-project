const express = require("express");
const router = express.Router();
const createUser = require("../models/createUser");
const validator = require("../start/validator");
const _ = require("lodash");
const passwordComplexity = require("joi-password-complexity");
const passwordOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};
router.post("/", async (req, res) => {
  const { error } = validator(
    _.pick(req.body, ["username", "email", "password"])
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
  const newUser = await createUser(req.body);
  res.status(201).send(_.pick(newUser, ["username", "email"]));
});

module.exports = router;
