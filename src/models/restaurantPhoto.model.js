const mongoose = require("mongoose");
const config = require("../config/config")
const restaurantPhotoSchema = new mongoose.Schema(
    {
        photo_url: {
            type: String,
            trim: true,
        },
        caption: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.resaturantPhoto_image) {
                    data.photo_url = `${config.base_url}restaurantPhoto_images/${data.photo_url}`;
                }
            },
        },
    }
);

const RestaurantPhoto = mongoose.model("restaurantPhoto", restaurantPhotoSchema);
module.exports = RestaurantPhoto

