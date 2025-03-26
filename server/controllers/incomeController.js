import { IncomeModel } from "../models/IncomeModel.js";

export const addIncome = async (req, res) => {
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
};

export const getIncomes = async (req, res) => {
  const { userId } = req.params;
  const { dateRange } = req;

  try {
    const allIncomes = await IncomeModel.getIncomes(userId, dateRange);

    res.json({ data: allIncomes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch incomes." });
  }
};
