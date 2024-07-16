const { DeliveryAddress } = require("../models");

// Create deliveryAddress
const createDeliveryAddress = async (reqBody) => {
  return DeliveryAddress.create(reqBody);
};

// Get deliveryAddress list
const getDeliveryAddressList = async () => {
  return DeliveryAddress.find({ $or: [{ is_active: true }] })
};

// Get deliveryAddress details by id
const getDeliveryAddressById = async (deliveryAddressId) => {
  return DeliveryAddress.findById(deliveryAddressId);
};

// deliveryAddress details update by id
const updateDetails = async (deliveryAddressId, updateBody) => {
  return DeliveryAddress.findByIdAndUpdate(deliveryAddressId, { $set: updateBody });
};

// Delete deliveryAddress
const deleteDeliveryAddress = async (deliveryAddressId) => {
  return DeliveryAddress.findByIdAndDelete(deliveryAddressId);
};

module.exports = {
  createDeliveryAddress,
  getDeliveryAddressList,
  getDeliveryAddressById,
  updateDetails,
  deleteDeliveryAddress,
};
