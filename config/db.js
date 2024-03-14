const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.nmh3pcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const connect = await mongoose.connect(DB_URL);
    console.log("Database connected successfully..");
  } catch (error) {
    console.error(error);
    
  }  
};

module.exports = connectDb;
