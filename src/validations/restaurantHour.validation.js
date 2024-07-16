const Joi = require("joi");

/** create restaurant hour validation */
const createRestaurantHour = {
    body: Joi.object().keys({
        open_time: Joi.string().required().trim(),
        close_time: Joi.string().required().trim(),
    }),
};

module.exports = {
    createRestaurantHour
};