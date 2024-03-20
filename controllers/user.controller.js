const User = require("../models/user");

const updateUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const updatedUserDetails = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updatedUserDetails,
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "Failed to update user detail." });
    }

    return res.status(200).json({
      success: true,
      message: "User details updated.",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw new Error(error);
  }
};

const updateAddressHandler = async (req, res) => {
  try {
    const updatedAddressData = req.body;
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // updated address index
    const updatedAddressIndex = user.address.findIndex(
      (ele) => ele._id === updatedAddressData._id
    );

    if (updatedAddressIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Address not found." });
    }

    // update address
    user.address[updatedAddressIndex] = { ...updatedAddressData };

    // save updated address
    await user.save();
    return res.status(200).json({
      success: false,
      message: "Address updated",
      address: user.address,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const addNewAddressHandler = async (req, res) => {
  try {
    const addressData = req.body;
    const userId = req.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // add new address
    user.address.push(addressData);
    await user.save();
    return res.status(200).json({
      success: true,
      message: "New address added.",
      address: user.address,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

module.exports = {
  updateAddressHandler,
  addNewAddressHandler,
  updateUserDetails,
};
