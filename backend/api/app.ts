import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const mongodbUri = process.env.MONGO_URI || "";

mongoose
  .connect(mongodbUri, {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("Mongodb connected....");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));
