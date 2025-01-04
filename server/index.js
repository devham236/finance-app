import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { ExpenseModel } from "./models/ExpenseModel.js";
import { GoalModel } from "./models/GoalModel.js";
import { IncomeModel } from "./models/IncomeModel.js";
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/api/v1/user/getAll/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const [allExpenses, allIncomes, allGoals] = await Promise.all([
      ExpenseModel.find({ userId }),
      IncomeModel.find({ userId }),
      GoalModel.find({ userId }),
    ]);
    const allData = {
      allExpenses,
      allIncomes,
      allGoals,
    };
    res.status(200).json(allData);
  } catch (error) {
    console.error("Error fetching queries:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/v1/incomes/add", async (req, res) => {
  const { incomeInput } = req.body;
  try {
    if (!incomeInput || !incomeInput.income || !incomeInput.label) {
      return res.status(400).json({ message: "Invalid income data!" });
    }
    const newIncome = await IncomeModel.addIncome(incomeInput);
    res.status(201).json(newIncome);
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

app.get("/api/v1/incomes/get", async (req, res) => {
  const allIncomes = await IncomeModel.getIncomes();
  res.json({ data: allIncomes });
});

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
    res.status(200).json({
      message: `${response.deletedCount} expenses deleted successfully`,
    });
  } catch (error) {
    console.error("Error adding expense:", error);
  }
});

app.post("/api/v1/goals/add", async (req, res) => {
  const { goalObject } = req.body;
  try {
    const response = await GoalModel.addGoal(goalObject);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error adding goal:", error);
    res.status(500).json({ message: "Internal  Server Error" });
  }
});

app.get("/api/v1/goals/get", async (req, res) => {
  const allGoals = await GoalModel.getGoals();
  res.json({ data: allGoals });
});

app.delete("/api/v1/goals/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await GoalModel.deleteGoal(id);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error adding goal:", error);
    res.status(500).json({ message: "Internal  Server Error" });
  }
});

app.patch("/api/v1/goals/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { newValue } = req.body;

    const response = await GoalModel.updateAchieved({ _id: id, newValue });
    res.status(201).json(response);
  } catch (error) {
    console.error("Error adding goal:", error);
    res.status(500).json({ message: "Internal  Server Error" });
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
