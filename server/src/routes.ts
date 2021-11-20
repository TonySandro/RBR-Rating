import express from 'express';
import PlayerController from './controller/PlayerController';

const routes = express.Router();
const playerController = new PlayerController();

routes.get("/viewTables", playerController.viewTables)

routes.get("/view/:table", playerController.view)
routes.post("/new_player/:table", playerController.create)
routes.delete("/remove/:id/:table", playerController.remove)
routes.put("/newRating/:id/:table", playerController.update)

// routes.post("/newStage", playerController.create)
// routes.delete("/removeStage/:id/:table", playerController.remove)

routes.put("/updateall", playerController.updateAll)

routes.post("/createTable/:table", playerController.createTable)
routes.delete("/deleteTable/:table", playerController.deleteTable)

export default routes