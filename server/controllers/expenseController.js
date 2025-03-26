import { ExpenseModel } from "../models/ExpenseModel.js";

export const addExpense = async (req, res) => {
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
};

export const getExpenses = async (req, res) => {
  const { userId } = req.params;
  const { dateRange } = req;

  try {
    const allExpenses = await ExpenseModel.getExpenses(userId, dateRange);
    res.json({ data: allExpenses });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses." });
  }
};

export const deleteAllExpenses = async (req, res) => {
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
};
