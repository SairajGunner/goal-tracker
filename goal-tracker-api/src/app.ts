import * as express from "express";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes.call(this);
  }

  private mountRoutes = (): void => {
    console.log(this);
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Version 1.0.0"
      });
    });
    this.express.use("/", router);
  };
}

export default new App().express;
