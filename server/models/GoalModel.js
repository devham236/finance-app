import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
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
    unique: false,
  },
});

goalSchema.statics.addGoal = async function (goalObject) {
  const { id, title, description, achieved } = goalObject;
  console.log(goalObject);

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

goalSchema.statics.getGoals = async function () {
  try {
    const goalsList = await this.find();
    if (goalsList.length > 0) {
      return goalsList;
    }
  } catch (error) {
    throw new Error("Unable to fetch goals.");
  }
};

goalSchema.statics.deleteGoal = async function (id) {
  console.log(id, "from model");
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

export const GoalModel = mongoose.model("goals", goalSchema);
