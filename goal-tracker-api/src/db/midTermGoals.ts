import mongoose from "mongoose";
import { Goal } from "../dataModels";

const midTermGoalsSchema = new mongoose.Schema(
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
  { collection: "midTermGoals" }
);

export const midTermGoalsModel = mongoose.model(
  "MidTermGoal",
  midTermGoalsSchema
);

export const getAllMidTermGoals = async () => {
  try {
    return await midTermGoalsModel.find();
  } catch (error) {
    throw error;
  }
};

export const getMidTermGoalById = async (id: String) => {
  try {
    return await midTermGoalsModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createMidTermGoal = async (goal: Goal) => {
  try {
    return await midTermGoalsModel.create(goal).then((goal) => goal.toObject());
  } catch (error) {
    throw error;
  }
};

export const updateMidTermGoalById = async (id: String, goal: Goal) => {
  try {
    return await midTermGoalsModel.findByIdAndUpdate(id, goal);
  } catch (error) {
    throw error;
  }
};

export const deleteMidTermGoalById = async (id: String) => {
  try {
    return await midTermGoalsModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
