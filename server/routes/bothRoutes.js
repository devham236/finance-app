import express from "express";
import { genDateRange } from "../middleware/dateRange.js";
import { getBoth } from "../controllers/bothController.js";

const bothRouter = express.Router();

bothRouter.get("/get/:userId", genDateRange, getBoth);

export default bothRouter;
