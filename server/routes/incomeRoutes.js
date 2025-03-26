import express from "express";
import { addIncome, getIncomes } from "../controllers/incomeController.js";
import { genDateRange } from "../middleware/dateRange.js";

const incomeRouter = express.Router();

incomeRouter.post("/add", addIncome);
incomeRouter.get("/get/:userId", genDateRange, getIncomes);

export default incomeRouter;
