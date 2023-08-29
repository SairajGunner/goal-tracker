import * as express from "express";
import {
  getAllShortTermGoals,
  getShortTermGoalById,
  createShortTermGoal,
  updateShortTermGoalById,
  deleteShortTermGoalById
} from "../db/shortTermGoals";

export const getAllGoals = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const goals = await getAllShortTermGoals();
    return res.status(200).json(goals);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const getGoalById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const goal = await getShortTermGoalById(req.params.id);
    return res.status(200).json(goal);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const createGoal = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const goalResponse = await createShortTermGoal(req.body.goal);
    return res.status(200).json(goalResponse);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const updateGoalById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const goalResponse = await updateShortTermGoalById(
      req.params.id,
      req.body.goal
    );
    return res.status(200).json(goalResponse);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const deleteGoalById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deletedGoal = await deleteShortTermGoalById(req.params.id);
    return res.status(200).json(deletedGoal);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};
