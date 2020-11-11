import express, { Request, Response } from 'express';
import PlayerController from './controller/PlayerController';

const routes = express.Router();
const playerController = new PlayerController();

routes.post("/players", playerController.create)
routes.put("/newRating/:id", playerController.update)
routes.put("/updateall", playerController.updateAll)
routes.delete("/remove/:id", playerController.remove)

export default routes