const express = require("express");
const validate = require("../../middlewares/validate");
const { foodValidation } = require("../../validations");
const { foodController } = require("../../controllers");
const router = express.Router()
// Create food
router.post(
    "/create-food",
    validate(foodValidation.cre4ateFood),
    foodController.createFood
)
// Update food with id
router.put(
    "/update-food/:foodId",
    foodController.updateFood
)
// Delete food by id
router.delete(
    "/delete-food/:foodId",
    foodController.deleteFood
)
//  Food list
router.get(
    "/list",
    foodController.getFoodlist
)

module.exports = router;