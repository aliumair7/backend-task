const Joi = require("joi");

const createTaskSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  createTaskSchema,
};
