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
    userId: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

expenseSchema.statics.addExpense = async function (expenseInput) {
  const { id, expense, color, label } = expenseInput;
  if (!id || !expense || !label) {
    throw new Error("Missing required fields: color, expense, or label.");
  }
  try {
    const newExpense = await this.create({
      userId: id,
      expense,
      color,
      label,
    });
    return newExpense;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to create expense in Database");
  }
};

expenseSchema.statics.getExpenses = async function (userId, dateRange) {
  try {
    const expensesList = await this.find({ userId, createdAt: dateRange });
    if (expensesList.length > 0) {
      return expensesList;
    } else {
      return [];
    }
  } catch (error) {
    throw Error("Unable to fetch expenses.");
  }
};

expenseSchema.statics.deleteAllExpenses = async function (userId) {
  try {
    const result = await this.deleteMany({ userId });
    return result;
  } catch (error) {
    throw new Error("Unable to delete all expenses");
  }
};

export const ExpenseModel = mongoose.model("expenses", expenseSchema);
