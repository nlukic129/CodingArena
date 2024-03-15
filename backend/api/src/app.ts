import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDb } from "./connection";
import authRoutes from "./routes/auth";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
