import express from 'express';
import PlayerController from './controller/PlayerController';

const routes = express.Router();
const playerController = new PlayerController();

routes.get("/players", playerController.view)
routes.post("/new_player", playerController.create)
routes.delete("/remove/:id", playerController.remove)
routes.put("/newRating/:id", playerController.update)
routes.put("/updateall", playerController.updateAll)

export default routes