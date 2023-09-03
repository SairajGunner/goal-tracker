import mongoose from "mongoose";
import { Goal, Task } from "../dataModels";

const shortTermGoalsSchema = new mongoose.Schema(
  {
    priority: { type: Number, required: false },
    title: { type: String, required: true },
    parentId: { type: String, required: true },
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
  { collection: "shortTermGoals" }
);

export const shortTermGoalsModel = mongoose.model(
  "ShortTermGoal",
  shortTermGoalsSchema
);

export const getAllShortTermGoals = async () => {
  try {
    return await shortTermGoalsModel.find();
  } catch (error) {
    throw error;
  }
};

export const getShortTermGoalById = async (id: String) => {
  try {
    return await shortTermGoalsModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createShortTermGoal = async (goal: Goal) => {
  try {
    let newGoal = await shortTermGoalsModel
      .create(goal)
      .then((goal) => goal.toObject());
    newGoal.tasks?.forEach((task: Task) => {
      task.parentId = newGoal._id.toString();
    });
    if (newGoal.tasks.length > 0)
      await shortTermGoalsModel.findByIdAndUpdate(newGoal._id, newGoal);
    return newGoal;
  } catch (error) {
    throw error;
  }
};

export const updateShortTermGoalById = async (id: String, goal: Goal) => {
  try {
    return await shortTermGoalsModel.findByIdAndUpdate(id, goal);
  } catch (error) {
    throw error;
  }
};

export const deleteShortTermGoalById = async (id: String) => {
  try {
    return await shortTermGoalsModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
