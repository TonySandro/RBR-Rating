import express, { Request, Response } from 'express';
import PlayerController from './controller/PlayerController';

const routes = express.Router();
const playerController = new PlayerController();

routes.post("/players", playerController.create);
routes.get("/media", playerController.selectMedia);

export default routes