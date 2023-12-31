import * as express from "express";
import {
  getAllLongTermGoals,
  getLongTermGoalById,
  createLongTermGoal,
  updateLongTermGoalById,
  deleteLongTermGoalById
} from "../../db/goals/longTermGoals";

export const getAllGoals = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const goals = await getAllLongTermGoals();
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
    const goal = await getLongTermGoalById(req.params.id);
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
    const goalResponse = await createLongTermGoal(req.body);
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
    const goalResponse = await updateLongTermGoalById(req.params.id, req.body);
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
    const deletedGoal = await deleteLongTermGoalById(req.params.id);
    return res.status(200).json(deletedGoal);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};
