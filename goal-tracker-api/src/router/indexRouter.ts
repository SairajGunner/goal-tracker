import * as express from "express";
import versionRouter from "./versionRouter";
import longTermGoalsRouter from "./longTermGoalsRouter";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

export default (): express.Router => {
  versionRouter("/version", router);
  longTermGoalsRouter("/long-term-goals", router);
  return router;
};
