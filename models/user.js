const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    profileImageUrl: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: [
      {
        name: {
          type: String,
        },
        street: {
          type: String,
        },
        zipCode: {
          type: Number,
        },
        city: {
          type: String,
        },
        country: {
          type: String,
        },
        district: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
      },
    ],
  },
  { timestamp: true }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
