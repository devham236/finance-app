import { ExpenseModel } from "../models/ExpenseModel.js";
import { IncomeModel } from "../models/IncomeModel.js";

export const getBoth = async (req, res) => {
  const { userId } = req.params;
  const { dateRange } = req;

  try {
    const [allExpenses, allIncomes] = await Promise.all([
      ExpenseModel.getExpenses(userId, dateRange),
      IncomeModel.getIncomes(userId, dateRange),
    ]);

    if (allExpenses.length > 0 && allIncomes.length > 0) {
      res.json({ expenses: allExpenses, income: allIncomes });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses." });
  }
};
