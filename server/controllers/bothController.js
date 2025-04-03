import { ExpenseModel } from "../models/ExpenseModel.js";
import { IncomeModel } from "../models/IncomeModel.js";

export const getBoth = async (req, res) => {
  const { userId } = req.params;
  const { dateRange } = req;

  try {
    const allExpenses = await ExpenseModel.getExpenses(userId, dateRange);
    const allIncomes = await IncomeModel.getIncomes(userId, dateRange);
    res.json({ expenses: allExpenses, income: allIncomes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses." });
  }
};
