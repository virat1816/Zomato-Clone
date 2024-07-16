const express = require("express");
const { restaurantOwnerValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { restaurantOwnerController } = require("../../controllers");

const router = express.Router();

/**create restaurantOwners */
router.post(
    "/createRestaurantOwner",
    validate(restaurantOwnerValidation.createRestaurantOwner),
    restaurantOwnerController.createRestaurantOwner
);

/**get restaurantOwner list */
router.get(
    "/getRestaurantOwnerList",
    restaurantOwnerController.getRestaurantOwnerList
);

/**get restaurantOwner details */
router.get(
    "/getRestaurantOwnerDetails/:restaurantOwnerId",
    restaurantOwnerController.getRestaurantOwnerDetails
);

/**update restaurantOwner */
router.put(
    "/updateRestaurantOwner/:restaurantOwnerId",
    restaurantOwnerController.updateRestaurantOwner
);

/**delete restaurantOwner */
router.delete(
    "/deleteRestaurantOwner/:restaurantOwnerId",
    restaurantOwnerController.deleteRestaurantOwner
)

module.exports = router;