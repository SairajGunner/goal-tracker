import mongoose from "mongoose";
import { Goal } from "../dataModels";

const longTermGoalsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    parentId: { type: String, required: false },
    description: { type: String, required: false },
    lastUpdate: { type: String, required: true },
    isComplete: { type: Boolean, required: true },
    tasks: {
      type: Array<{
        title: { type: String; required: true };
        parentId: { type: String; required: true };
        description: { type: String; required: false };
        isComplete: { type: Boolean; required: true };
        dateCompleted: { type: String; required: false };
      }>,
      required: false
    }
  },
  { collection: "longTermGoals" }
);

export const longTermGoalsModel = mongoose.model(
  "LongTermGoal",
  longTermGoalsSchema
);

export const getAllLongTermGoals = async () => {
  try {
    longTermGoalsModel.find();
  } catch (error) {
    throw error;
  }
};

export const getLongTermGoalById = async (id: String) => {
  try {
    longTermGoalsModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createLongTermGoal = async (goal: Goal) => {
  try {
    longTermGoalsModel.create(goal).then((goal) => goal.toObject());
  } catch (error) {
    throw error;
  }
};

export const updateLongTermGoalById = async (id: String, goal: Goal) => {
  try {
    longTermGoalsModel.findByIdAndUpdate(id, goal);
  } catch (error) {
    throw error;
  }
};

export const deleteLongTermGoalById = async (id: String) => {
  try {
    longTermGoalsModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
