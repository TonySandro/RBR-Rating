import express from 'express';
import PlayerController from './controller/PlayerController';
import TableController from './controller/TableController';

const routes = express.Router();
const playerController = new PlayerController();
const tableController = new TableController();

routes.get("/view/:table", playerController.view)
routes.post("/new_player/:table", playerController.create)
routes.delete("/remove/:id/:table", playerController.remove)
routes.put("/newRating/:id/:table", playerController.update)

routes.put("/updateall", playerController.updateAll)

routes.post("/createTable/:table", tableController.createTable)
routes.delete("/deleteTable/:table", tableController.deleteTable)
routes.get("/viewTables", tableController.viewTables)

export default routes