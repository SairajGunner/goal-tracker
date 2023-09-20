import * as express from "express";
import {
  createTrackedTask,
  deleteTrackedTaskById,
  getAllSelectedWeeksTrackedTasks,
  getTrackedTaskById,
  updateTrackedTaskById
} from "db/tracked-tasks/trackedTasks";

export const getAllSelectedWeeksTasks = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const trackedTasks = await getAllSelectedWeeksTrackedTasks(
      parseInt(req.params.year),
      parseInt(req.params.month),
      parseInt(req.params.weekStartDate)
    );
    return res.status(200).json(trackedTasks);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const getTaskById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const trackedTask = await getTrackedTaskById(req.params.id);
    return res.status(200).json(trackedTask);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const createTask = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newTrackedTask = await createTrackedTask(req.body);
    return res.status(200).json(newTrackedTask);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const updateTaskById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const updatedTask = await updateTrackedTaskById(req.params.id, req.body);
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const deleteTaskById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deletedTask = await deleteTrackedTaskById(req.params.id);
    return res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};
