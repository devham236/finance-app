import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";

import incomeRouter from "./routes/incomeRoutes.js";
import expenseRouter from "./routes/expenseRouter.js";
import goalRouter from "./routes/goalRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api/v1/incomes", incomeRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/goals", goalRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");

    server.listen(process.env.PORT, () => {
      console.log(`Server is listening on Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
