const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect();
    console.log("Database connected successfully..");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

module.exports = connectDb;
