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
  },
  {
    timestamps: true,
  }
);

expenseSchema.statics.addExpense = async function () {
  //   const expenseExists = await this.findOne(expense.id);
  //   if (expenseExists) {
  //     throw Error("Expense already exists.");
  //   } else {
  //     const newExpense = await this.create({
  //       id: expense.id,
  //       expense: expense.value,
  //       color: expense.color,
  //       label: expense.label,
  //     });
  //     return newExpense;
  //   }
  const newExpense = await this.create({
    id: "12345",
    expense: 2000,
    color: "red",
    label: "Salary",
  });
  return newExpense;
};

export const ExpenseModel = mongoose.model("expenses", expenseSchema);
