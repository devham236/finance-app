import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { ExpenseModel } from "./models/ExpenseModel.js";
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.post("/api/v1/expenses/add", async (req, res) => {
  const { expenseInput } = req.body;
  try {
    if (!expenseInput || !expenseInput.expense || !expenseInput.label) {
      return res.status(400).json({ message: "Invalid expense data!" });
    }
    const newExpense = await ExpenseModel.addExpense(expenseInput);
    res.status(201).json(newExpense);
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

app.get("/api/v1/expenses/get", async (req, res) => {
  const allExpenses = await ExpenseModel.getExpenses();
  res.json({ data: allExpenses });
});

app.delete("/api/v1/expenses/deleteAll/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    if (!userId) {
      res.status(400).json({ message: "Invalid user id" });
    }
    const response = await ExpenseModel.deleteAllExpenses(userId);
    res
      .status(200)
      .json({
        message: `${response.deletedCount} expenses deleted successfully`,
      });
  } catch (error) {
    console.error("Error adding expense:", error);
  }
});

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
