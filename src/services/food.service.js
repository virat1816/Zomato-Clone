const { Food } = require("../models");
// Get food by name
const getFoodbyname = async(food_name) => {
    return Food.findOne({food_name})
}
// Create food
const createFood = async(reqbody) => {
    return Food.create(reqbody);
}
// Get food list
const getFoodlist = async() => {
    return Food.find().populate({restaurant_name});
}
// Get food by id
const getFoodbyid = async(food_id) => {
    return Food.findById(food_id);
}
// Update food by id
const updateFood = async(food_id,reqbody) => {
    return Food.findByIdAndUpdate(food_id,{$set:reqbody});
}
// Delete food
const deleteFood = async(food_id) => {
    return Food.findByIdAndDelete(food_id);
}
// Exporting services object
module.exports = {
    getFoodbyname,
    createFood,
    getFoodlist,
    getFoodbyid,
    updateFood,
    deleteFood
}