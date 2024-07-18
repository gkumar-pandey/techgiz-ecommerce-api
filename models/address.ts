import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    street1: {
      type: String,
    },
    street2: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pin_code: {
      type: String,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
