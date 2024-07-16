const Joi = require("joi");

// create restaurant photo validation
const createRestaurantPhoto = {
    body: Joi.object().keys({
        photo_url: Joi.string().allow(""),
        caption: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createRestaurantPhoto
};
