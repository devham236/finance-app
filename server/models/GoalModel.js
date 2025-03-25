import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
      unique: false,
    },
    achieved: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

goalSchema.statics.addGoal = async function (goalObject) {
  const { id, title, description, achieved } = goalObject;

  if ((!title, !id)) {
    throw new Error("Missing required field: title or id.");
  }
  try {
    const newGoal = await this.create({
      userId: id,
      title,
      description,
      achieved,
    });
    return newGoal;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to create goal in Database");
  }
};

goalSchema.statics.getGoals = async function (userId, dateRange) {
  try {
    const goalsList = await this.find({ userId, createdAt: dateRange });
    if (goalsList.length > 0) {
      return goalsList;
    }
  } catch (error) {
    throw new Error("Unable to fetch goals.");
  }
};

goalSchema.statics.deleteGoal = async function (id) {
  try {
    const deletedGoal = await this.findOneAndDelete({ _id: id });
    if (!deletedGoal) {
      throw new Error("Goal not found");
    }
    return deletedGoal;
  } catch (error) {
    throw new Error("Unable to delete goal.");
  }
};

goalSchema.statics.updateAchieved = async function ({ _id, newValue }) {
  try {
    const updatedGoal = await this.findByIdAndUpdate(
      { _id },
      {
        achieved: newValue,
      },
      { new: true }
    );
    return updatedGoal;
  } catch (error) {
    throw new Error("Unable to update goal.");
  }
};

goalSchema.statics.updateTitleDesc = async function ({
  _id,
  newTitle,
  newDesc,
}) {
  try {
    const updatedGoal = await this.findByIdAndUpdate(
      { _id },
      {
        title: newTitle,
        description: newDesc,
      },
      { new: true }
    );
    return updatedGoal;
  } catch (error) {
    throw new Error("Unable to update goal.");
  }
};

export const GoalModel = mongoose.model("goals", goalSchema);
