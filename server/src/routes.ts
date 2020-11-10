import express, { Request, Response } from 'express';
import PlayerController from './controller/PlayerController';

const routes = express.Router();
const playerController = new PlayerController();

routes.post("/players", playerController.create);
routes.put("/players/:id", playerController.update);

export default routes