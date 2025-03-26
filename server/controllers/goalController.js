import { GoalModel } from "../models/GoalModel.js";

export const addGoal = async (req, res) => {
  const { goalObject } = req.body;
  try {
    const response = await GoalModel.addGoal(goalObject);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error adding goal:", error);
    res.status(500).json({ message: "Internal  Server Error" });
  }
};

export const getGoals = async (req, res) => {
  const { userId } = req.params;
  const { dateRange } = req;

  const allGoals = await GoalModel.getGoals(userId, dateRange);
  res.json({ data: allGoals });
};

export const deleteGoal = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await GoalModel.deleteGoal(id);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error adding goal:", error);
    res.status(500).json({ message: "Internal  Server Error" });
  }
};

export const updateAchieved = async (req, res) => {
  try {
    const { id } = req.params;
    const { newValue } = req.body;

    const response = await GoalModel.updateAchieved({ _id: id, newValue });
    res.status(201).json(response);
  } catch (error) {
    console.error("Error adding goal:", error);
    res.status(500).json({ message: "Internal  Server Error" });
  }
};

export const updateTitleDesc = async (req, res) => {
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
};
