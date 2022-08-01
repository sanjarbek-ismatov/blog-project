const Joi = require("joi");
module.exports = (valid) => {
  const schema = Joi.object({
    username: Joi.string().required().min(3),
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(valid);
};
