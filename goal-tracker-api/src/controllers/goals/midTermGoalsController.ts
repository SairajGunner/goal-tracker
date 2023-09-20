import * as express from "express";
import {
  getAllMidTermGoals,
  getMidTermGoalById,
  createMidTermGoal,
  updateMidTermGoalById,
  deleteMidTermGoalById
} from "../../db/goals/midTermGoals";

export const getAllGoals = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const goals = await getAllMidTermGoals();
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
    const goal = await getMidTermGoalById(req.params.id);
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
    const goalResponse = await createMidTermGoal(req.body);
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
    const goalResponse = await updateMidTermGoalById(req.params.id, req.body);
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
    const deletedGoal = await deleteMidTermGoalById(req.params.id);
    return res.status(200).json(deletedGoal);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};
