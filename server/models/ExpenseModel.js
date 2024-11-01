import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  expense: {
    type: Number,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

export const ExpenseModel = mongoose.model("expenses", expenseSchema);
