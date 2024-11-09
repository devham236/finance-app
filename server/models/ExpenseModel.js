import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    expense: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

expenseSchema.statics.addExpense = async function () {
  const newExpense = await this.create({
    id: "12345",
    expense: 1000,
    color: "red",
    label: "Salary",
  });
  return newExpense;
};

expenseSchema.statics.getExpenses = async function () {
  try {
    const expensesList = await this.find();
    if (expensesList.length > 0) {
      return expensesList;
    } else {
      return [];
    }
  } catch (error) {
    throw Error("Unable to fetch expenses.");
  }
};

export const ExpenseModel = mongoose.model("expenses", expenseSchema);
