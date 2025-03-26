import express from "express";
import {
  addExpense,
  deleteAllExpenses,
  getExpenses,
} from "../controllers/expenseController.js";
import { genDateRange } from "../middleware/dateRange.js";

const expenseRouter = express.Router();

expenseRouter.post("/add", addExpense);
expenseRouter.get("/get/:userId", genDateRange, getExpenses);
expenseRouter.delete("/deleteAll/:userId", deleteAllExpenses);

export default expenseRouter;
