const express = require("express");
const {
  addNewAddressHandler,
  updateAddressHandler,
  removeAddressHandler,
  updateUserDetails,
} = require("../../../controllers/user.controller");
const userRoutes = express.Router();

// POST /api/v1/users/:userId/address
userRoutes.post("/:userId/address", addNewAddressHandler);

// POST /api/v1/users/:userId/address/:addressId
userRoutes.post("/:userId/address/:addressId", updateAddressHandler);

// DELETE /api/v1/users/:userId/address/:addressId
userRoutes.delete("/:userId/address/:addressId", removeAddressHandler);

// POST /api/v1/users/:userId/user-details
userRoutes.post("/:userId/user-details", updateUserDetails);

module.exports = userRoutes;
