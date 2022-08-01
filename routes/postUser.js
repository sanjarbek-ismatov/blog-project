const express = require("express");
const router = express.Router();
const createUser = require("../models/createUser");
const validator = require("../start/validator");
const _ = require("lodash");
router.post("/", async (req, res) => {
  const { error } = validator(
    _.pick(req.body, ["username", "email", "password"])
  );
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const newUser = await createUser(req.body);
  res.status(201).send(_.pick(newUser, ["username", "email"]));
});

module.exports = router;
