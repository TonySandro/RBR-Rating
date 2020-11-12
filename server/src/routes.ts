import express from 'express';
import PlayerController from './controller/PlayerController';

const routes = express.Router();
const playerController = new PlayerController();

routes.post("/players", playerController.create)
routes.delete("/remove/:id", playerController.remove)
routes.put("/newRating/:id", playerController.update)
routes.put("/updateall", playerController.updateAll)

export default routes