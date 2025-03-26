import express from "express";
import {
  addGoal,
  deleteGoal,
  getGoals,
  updateAchieved,
  updateTitleDesc,
} from "../controllers/goalController.js";
import { genDateRange } from "../middleware/dateRange.js";

const goalRouter = express.Router();

goalRouter.post("/add", addGoal);
goalRouter.get("/get/:userId", genDateRange, getGoals);
goalRouter.delete("/delete/:id", deleteGoal);
goalRouter.patch("/updateAchieved/:id", updateAchieved);
goalRouter.patch("/updateTitleDesc/:id", updateTitleDesc);

export default goalRouter;
