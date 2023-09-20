import mongoose from "mongoose";
import { Goal, Task } from "../../dataModels";

const longTermGoalsSchema = new mongoose.Schema(
  {
    priority: { type: Number, required: false },
    title: { type: String, required: true },
    parentId: { type: String, required: false },
    description: { type: String, required: false },
    pictureSource: { type: String, required: false },
    lastUpdate: { type: Date, required: true },
    isComplete: { type: Boolean, required: true },
    tasks: {
      type: Array<{
        title: { type: String; required: true };
        parentId: { type: String; required: true };
        description: { type: String; required: false };
        isComplete: { type: Date; required: true };
        dateCompleted: { type: String; required: false };
      }>,
      required: false
    }
  },
  { collection: "longTermGoals" }
);

const goalsDb = mongoose.connection.useDb("goals");

export const longTermGoalsModel = goalsDb.model(
  "LongTermGoal",
  longTermGoalsSchema
);

export const getAllLongTermGoals = async () => {
  try {
    return await longTermGoalsModel.find();
  } catch (error) {
    throw error;
  }
};

export const getLongTermGoalById = async (id: String) => {
  try {
    return await longTermGoalsModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createLongTermGoal = async (goal: Goal) => {
  try {
    let newGoal = await longTermGoalsModel
      .create(goal)
      .then((goal) => goal.toObject());
    newGoal.tasks.forEach(
      (task: Task) => (task.parentId = newGoal._id.toString())
    );
    if (newGoal.tasks.length > 0)
      await longTermGoalsModel.findByIdAndUpdate(newGoal._id, newGoal);
    return newGoal;
  } catch (error) {
    throw error;
  }
};

export const updateLongTermGoalById = async (id: String, goal: Goal) => {
  try {
    return await longTermGoalsModel.findByIdAndUpdate(id, goal);
  } catch (error) {
    throw error;
  }
};

export const deleteLongTermGoalById = async (id: String) => {
  try {
    return await longTermGoalsModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
