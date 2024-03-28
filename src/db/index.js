import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\n Mongodb connect!! DB host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection error ", error);
    process.exit(1);
  }
};
