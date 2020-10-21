import express, { request, response } from 'express';
import db from './database/connection';
// import PlayerController from './controller/playerController';

const routes = express.Router();

routes.post("/players", async (request, response) => {
    const {
        position,
        name,
        oldRating,
        newRating,

    } = request.body

    await db('players').insert({
        position,
        name,
        oldRating,
        newRating,
    })

    return response.send()
});
// routes.get("/classes", classesControllers.index)

export default routes