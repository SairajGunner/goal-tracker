import * as express from "express";

export const getVersion = (req: express.Request, res: express.Response) => {
  return res.status(200).json({ version: "1.0.0" });
};
