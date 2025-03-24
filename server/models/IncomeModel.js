import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      unique: true,
    },
    income: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
      unique: false,
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

incomeSchema.statics.addIncome = async function (incomeInput) {
  const { userId, income, color, label } = incomeInput;

  if (!userId || !income || !label) {
    throw new Error("Missing required fields: color, income, or label.");
  }
  try {
    const newIncome = await this.create({
      userId,
      income,
      color,
      label,
    });
    return newIncome;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to create income in Database");
  }
};

incomeSchema.statics.getIncomes = async function (userId, dateRange) {
  console.log(dateRange);

  try {
    const incomeList = await this.find({ userId });
    if (incomeList.length > 0) {
      return incomeList;
    } else {
      return [];
    }
  } catch (error) {
    throw Error("Unable to fetch incomes.");
  }
};

export const IncomeModel = mongoose.model("incomes", incomeSchema);
