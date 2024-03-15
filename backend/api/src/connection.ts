import mongoose, { ConnectOptions } from "mongoose";

import { createError } from "./utils/error";
import { ErrorMessage } from "./types/ErrorTypes";

export const connectToDb = async () => {
  try {
    const mongodbUri = process.env.MONGO_URI || "";
    const options: ConnectOptions = {
      dbName: process.env.DB_NAME,
    };

    await mongoose.connect(mongodbUri, options);
    console.log("Connected to MongoDB");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to db");
    });

    mongoose.connection.on("error", (err) => {
      console.log(err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose connection is disconnected");
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(false);
      console.log("Mongoose connection is disconnected due to app termination");
      process.exit(0);
    });
  } catch (err: Error | any) {
    throw createError(err.message, 500, [{ msg: ErrorMessage.DbConnectionFailed }]);
  }
};
