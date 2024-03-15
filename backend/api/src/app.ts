import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDb } from "./connection";
import authRoutes from "./routes/auth";
import { CustomError } from "./types/ErrorTypes";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.use((error: CustomError, _req: express.Request, res: express.Response, _next: express.NextFunction): any => {
  const title: string = error.title;
  const status: number = error.statusCode || 500;
  const errors: any = error.errors;
  res.status(status).json({ title, errors });
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
