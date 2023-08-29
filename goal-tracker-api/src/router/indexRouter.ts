import * as express from "express";
import versionRouter from "./versionRouter";
import longTermGoalsRouter from "./longTermGoalsRouter";
import midTermGoalsRouter from "./midTermGoalsRouter";
import shortTermGoalsRouter from "./shortTermGoalsRouter";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

export default (): express.Router => {
  versionRouter("/version", router);
  longTermGoalsRouter("/long-term-goals", router);
  midTermGoalsRouter("/mid-term-goals", router);
  shortTermGoalsRouter("/short-term-goals", router);
  return router;
};
