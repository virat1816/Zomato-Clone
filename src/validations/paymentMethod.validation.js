const Joi = require("joi");

/**create paymentMethod */
const createPaymentMethod = {
    body: Joi.object().keys({
        card_number: Joi.string().required().trim(),
        card_holder_name: Joi.string().required().trim(),
    })
}

module.exports = {
    createPaymentMethod
}