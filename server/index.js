import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { GoalModel } from "./models/GoalModel.js";
import { genDateRange } from "./middleware/dateRange.js";
import incomeRouter from "./routes/incomeRoutes.js";
import expenseRouter from "./routes/expenseRouter.js";
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api/v1/incomes", incomeRouter);
app.use("/api/v1/expenses", expenseRouter);

//Goals
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

app.get("/api/v1/goals/get/:userId", genDateRange, async (req, res) => {
  const { userId } = req.params;
  const { dateRange } = req;

  const allGoals = await GoalModel.getGoals(userId, dateRange);
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

app.patch("/api/v1/goals/updateAchieved/:id", async (req, res) => {
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

app.patch("/api/v1/goals/updateTitleDesc/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { newTitle, newDesc } = req.body;

    const response = await GoalModel.updateTitleDesc({
      _id: id,
      newTitle,
      newDesc,
    });
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
