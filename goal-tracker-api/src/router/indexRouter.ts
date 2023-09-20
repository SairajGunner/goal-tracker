import * as express from "express";
import versionRouter from "./versionRouter";
import longTermGoalsRouter from "./goals/longTermGoalsRouter";
import midTermGoalsRouter from "./goals/midTermGoalsRouter";
import shortTermGoalsRouter from "./goals/shortTermGoalsRouter";
import trackedTasksRouter from "./tracked-tasks/trackedTasksRouter";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

export default (): express.Router => {
  versionRouter("/version", router);
  longTermGoalsRouter("/long-term-goals", router);
  midTermGoalsRouter("/mid-term-goals", router);
  shortTermGoalsRouter("/short-term-goals", router);
  trackedTasksRouter("/tracked-tasks", router);
  return router;
};
