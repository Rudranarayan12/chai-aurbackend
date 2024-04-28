import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`mongodb is connected at ${process.env.PORT}`);
  } catch (error) {
    console.log("Mongodb errror ", error);
    process.exit(1);
  }
};

export default connectDB;
