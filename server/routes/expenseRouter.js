import express from "express";
import { addExpense, getExpenses } from "../controllers/expenseController.js";
import { genDateRange } from "../middleware/dateRange.js";

const expenseRouter = express.Router();

expenseRouter.post("/add", addExpense);
expenseRouter.get("/get/:userId", genDateRange, getExpenses);

export default expenseRouter;
