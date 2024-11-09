import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      unique: true,
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

expenseSchema.statics.addExpense = async () => {
  // const expenseExists = await this.findOne(expense.id);
  // if (expenseExists) {
  //   throw Error("Expense already exists.");
  // } else {
  //   const newExpense = await this.create({
  //     id: expense.id,
  //     expense: expense.value,
  //     color: expense.color,
  //     label: expense.label,
  //   });
  //   return newExpense;
  // }
  const newExpense = {
    id: "12345",
    expense: 1000,
    color: "red",
    label: "Salary",
  };
  return newExpense;
};

expenseSchema.statics.getExpenses = async () => {
  try {
    const expensesList = await this.find();
    return expensesList;
  } catch (error) {
    throw Error("Unable to fetch expenses.");
  }
};

export const ExpenseModel = mongoose.model("expenses", expenseSchema);
