import express from "express";
import { OkrController } from "./okrController";

export function createOkrRouteHandler(okrController:OkrController)  {
    const router = express.Router();
    router.get("/", (req:express.Request, res:express.Response) => {
        okrController.handleOkrGet(req, res);
    });
    return router;
}