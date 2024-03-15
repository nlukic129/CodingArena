import express, { Request, Response } from "express";
import dotenv from "dotenv";

import { connectToDb } from "./connection";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
