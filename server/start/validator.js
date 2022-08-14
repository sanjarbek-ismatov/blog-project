const Joi = require("joi");
module.exports.postValidator = (valid) => {
  const schema = Joi.object({
    username: Joi.string().required().min(3),
    firstname: Joi.string().required().min(3),
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
    lastname: Joi.string().required().min(3),
  });
  return schema.validate(valid);
};
//
module.exports.poster = (valid) => {
  const schema = Joi.object({
    title: Joi.string().required().min(1),
    content: Joi.string().required().min(1),
    image: Joi.string().required().min(1),
  });
  return schema.validate(valid);
};
module.exports.loginValidator = (valid) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8),
  });
  return schema.validate(valid);
};
