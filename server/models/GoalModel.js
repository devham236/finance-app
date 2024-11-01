import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: Number,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

export const GoalModel = mongoose.model("goals", goalSchema);
