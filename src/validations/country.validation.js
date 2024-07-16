const Joi = require("joi");

// Create country validation
const createCountry = {
  body: Joi.object().keys({
    country_name: Joi.string().required().trim(),
    continent_name: Joi.string().required().trim(),
    official_language: Joi.string().required().trim(),
    currency: Joi.string().required().trim(),
    created_at: Joi.date().iso().required(),
  }),
};

module.exports = {
  createCountry,
};
