import * as express from "express";
import {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoalById,
  deleteGoalById
} from "../controllers/longTermGoalsController";

export default (routePrefix: String, router: express.Router) => {
  router.get(`${routePrefix}/all`, getAllGoals);
  router.get(`${routePrefix}/:id`, getGoalById);
  router.post(`${routePrefix}/create`, createGoal);
  router.put(`${routePrefix}/update`, updateGoalById);
  router.delete(`${routePrefix}/delete`, deleteGoalById);
};
