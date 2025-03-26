import express from "express";
import { addExpense, getExpenses } from "../controllers/expenseController";
import { genDateRange } from "../middleware/dateRange";

const expenseRouter = express.Router();

expenseRouter.post("/expenses/add", addExpense);
expenseRouter.get("/get/:userId", genDateRange, getExpenses);
