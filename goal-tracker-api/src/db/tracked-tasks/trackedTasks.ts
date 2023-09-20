import mongoose from "mongoose";
import { TrackedTask } from "dataModels";

const trackedTaskSchema = new mongoose.Schema(
  {
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    weekStartDate: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    isComplete: { type: Boolean, required: true },
    dateCompleted: { type: Date, required: false }
  },
  { collection: "tasks" }
);

const trackedTasksDb = mongoose.connection.useDb("trackedTasks");

export const trackedTasksModel = trackedTasksDb.model(
  "TrackedTask",
  trackedTaskSchema
);

export const getAllSelectedWeeksTrackedTasks = async (
  year: number,
  month: number,
  weekStartDate: number
) => {
  try {
    return await trackedTasksModel.find({
      year: year,
      month: month,
      weekStartDate: weekStartDate
    });
  } catch (error) {
    throw error;
  }
};

export const getTrackedTaskById = async (id: String) => {
  try {
    return await trackedTasksModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createTrackedTask = async (task: TrackedTask) => {
  try {
    let newTrackedTask = await trackedTasksModel
      .create(task)
      .then((task) => task.toObject());
    return newTrackedTask;
  } catch (error) {
    throw error;
  }
};

export const updateTrackedTaskById = async (id: String, task: TrackedTask) => {
  try {
    return await trackedTasksModel.findByIdAndUpdate(id, task);
  } catch (error) {
    throw error;
  }
};

export const deleteTrackedTaskById = async (id: String) => {
  try {
    return await trackedTasksModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
