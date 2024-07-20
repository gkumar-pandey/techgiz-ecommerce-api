import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    street1: {
      type: String,
      required: true,
    },
    street2: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin_code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model('Address', addressSchema);

export default Address;
