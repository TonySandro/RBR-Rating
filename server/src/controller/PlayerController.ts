import { json, Request, Response } from 'express'
import db from '../database/connection';

export default class PlayerController {
    async selectMedia (request: Request, response: Response) {
        const results = await db('players').sum({soma: 'oldRating'})
            
        var mediaRating: number = results[0].soma

        return response.json(mediaRating)
    }

    async create (request: Request, response: Response)  {
        const {
            position,
            name ,
            oldRating,
            newRating,
    
        } = request.body

        const trx = await db.transaction();
    
        try {
            await trx('players').insert({
                position,
                name,
                oldRating,
                newRating,
            })
    
            await trx.commit()
        
            return response.send()
        }catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }
    }
}