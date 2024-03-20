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
        _id: {
          type: mongoose.Schema.Types.ObjectId,
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
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
