const Joi = require("joi");

const validate = (payload) => {
  return schema.validate(payload);
};

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

module.exports = validate;
