import express from "express";
import { getBoth } from "../controllers/bothController.js";

const bothRouter = express.Router();

bothRouter.get("/get/:userId", getBoth);

export default bothRouter;
