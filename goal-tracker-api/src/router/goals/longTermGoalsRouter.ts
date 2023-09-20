import * as express from "express";
import {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoalById,
  deleteGoalById
} from "../../controllers/goals/longTermGoalsController";

export default (routePrefix: string, router: express.Router) => {
  router.get(`${routePrefix}/all`, getAllGoals);
  router.get(`${routePrefix}/:id`, getGoalById);
  router.post(`${routePrefix}/create`, createGoal);
  router.put(`${routePrefix}/update/:id`, updateGoalById);
  router.delete(`${routePrefix}/delete/:id`, deleteGoalById);
};
