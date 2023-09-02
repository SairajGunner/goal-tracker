import * as express from "express";
import { getVersion } from "../controllers/versionController";

export default (routePrefix: string, router: express.Router) => {
  router.get(`${routePrefix}/`, getVersion);
};
