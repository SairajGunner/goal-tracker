import * as express from "express";
import {
  getAllSelectedWeeksTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById
} from "../../controllers/tracked-tasks/trackedTasksController";

export default (routePrefix: string, router: express.Router) => {
  router.get(
    `${routePrefix}/:year/:month/:weekStartDate`,
    getAllSelectedWeeksTasks
  );
  router.get(`${routePrefix}/:id`, getTaskById);
  router.post(`${routePrefix}/create`, createTask);
  router.put(`${routePrefix}/update/:id`, updateTaskById);
  router.delete(`${routePrefix}/delete/:id`, deleteTaskById);
};
