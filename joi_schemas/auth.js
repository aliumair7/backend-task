const Joi = require("joi");

const registerUserSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().required(),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
};
