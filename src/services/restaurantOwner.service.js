const { RestaurantOwner } = require("../models");

/**create RestaurantOwner */
const createRestaurantOwner = async (reqBody) => {
    return RestaurantOwner.create(reqBody);
}

/**get RestaurantOwner list */
const getRestaurantOwnerList = async (req, res) => {
    return RestaurantOwner.find()
        .populate({restaurant_id
        });
}

/**get RestaurantOwner details by id */
const getRestaurantOwnerById = async (restaurantOwnerId) => {
    return RestaurantOwner.findById(restaurantOwnerId);
}

/**update RestaurantOwner */
const updateRestaurantOwner = async (restaurantOwnerId, updateBody) => {
    return RestaurantOwner.findByIdAndUpdate(restaurantOwnerId, { $set: updateBody });
}

/**delete RestaurantOwner */
const deleteRestaurantOwner = async (restaurantOwnerId) => {
    return RestaurantOwner.findByIdAndDelete(restaurantOwnerId);
}

module.exports = {
    createRestaurantOwner,
    getRestaurantOwnerList,
    getRestaurantOwnerById,
    updateRestaurantOwner,
    deleteRestaurantOwner
}