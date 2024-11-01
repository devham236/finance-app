import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  income: {
    type: Number,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

export const IncomeModel = mongoose.model("incomes", incomeSchema);
