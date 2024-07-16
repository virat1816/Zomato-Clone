const { restaurantOwnerService } = require("../services");

/**create restaurantOwners */
const createRestaurantOwner = async (req, res) => {
    try {
        const reqBody = req.body;
        const restaurantOwner = await restaurantOwnerService.createRestaurantOwner(reqBody);

        if (!restaurantOwner) {
            throw new Error("Restaurant owners not found !");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant owners created !",
            data: restaurantOwner
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get restaurantOwner list */
const getRestaurantOwnerList = async (req, res) => {
    try {
        const getList = await restaurantOwnerService.getRestaurantOwnerList();
        if (!getList) {
            throw new Error("Restaurant owners not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get restaurant owners list successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get restaurantOwner details by id*/
const getRestaurantOwnerDetails = async (req, res) => {
    try {
        const restaurantOwnerId = req.params.restaurantOwnerId;
        const getDetails = await restaurantOwnerService.getRestaurantOwnerById(restaurantOwnerId);

        if (!getDetails) {
            throw new Error("Restaurant owners not found !");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant owners details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**restaurantOwner details update by id */
const updateRestaurantOwner = async (req, res) => {
    try {
        const restaurantOwnerId = req.params.restaurantOwnerId;
        const restaurantOwnerExist = await restaurantOwnerService.getRestaurantOwnerById(restaurantOwnerId);

        if (!restaurantOwnerExist) {
            throw new Error("Restaurant owners not found !");
        }

        await restaurantOwnerService.updateRestaurantOwner(restaurantOwnerId, req.body);

        res.status(200).json({
            success: true,
            message: "Restaurant owners details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete restaurantOwner */
const deleteRestaurantOwner = async (req, res) => {
    try {
        const restaurantOwnerExists = await restaurantOwnerService.getRestaurantOwnerById(req.params.restaurantOwnerId);
        if (!restaurantOwnerExists) {
            throw new Error("Restaurant owners not found !");
        }

        await restaurantOwnerService.deleteRestaurantOwner(req.params.restaurantOwnerId);

        res.status(200).json({
            success: true,
            message: "restaurantOwner deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createRestaurantOwner,
    getRestaurantOwnerList,
    getRestaurantOwnerDetails,
    updateRestaurantOwner,
    deleteRestaurantOwner
}

