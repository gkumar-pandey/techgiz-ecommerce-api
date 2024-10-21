import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@gautam-db.ze7ri.mongodb.net/?retryWrites=true&w=majority&appName=Gautam-DB`;
    const connect = await mongoose.connect(DB_URL);
    if (connect) {
      console.log('MongoDB connected successfully');
      console.log({
        Host: connect.connection.host,
        Name: connect.connection.name,
        Database: connect.connection.db.databaseName,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;
