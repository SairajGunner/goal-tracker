import mongoose from "mongoose";
import { Goal } from "../dataModels";

const longTermGoalsSchema = new mongoose.Schema({
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
});

export const longTermGoalsModel = mongoose.model(
  "LongTermGoal",
  longTermGoalsSchema
);

export const getAllLongTermGoals = () => {
  longTermGoalsModel.find();
};

export const getLongTermGoalById = (id: String) => {
  longTermGoalsModel.findById(id);
};

export const createLongTermGoal = (goal: Goal) => {
  longTermGoalsModel.create(goal).then((goal) => goal.toObject());
};

export const updateLongTermGoalById = (id: String, goal: Goal) => {
  longTermGoalsModel.findByIdAndUpdate(id, goal);
};

export const deleteLongTermGoalById = (id: String) => {
  longTermGoalsModel.findByIdAndDelete(id);
};
