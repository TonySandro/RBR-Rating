import { Request, Response } from 'express';
import db from '../database/connection';
import newRating from '../util/newRating';
import updateAll from '../util/updateAll';

export default class PlayerController {

    async view ( request: Request, response: Response ) {
        const result = await db("players").select("*")
        
        return response.json(result)
    }
    async updateAll (request: Request, response: Response){
        try {
            updateAll()

            return response.send()
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected error while update all players'
            })
        }
    }

    async update(request: Request, response: Response){
        const { id } = request.params

        const novoRating = await newRating(id)

        const result = await db('players').update({ newRating: novoRating }).where('id', id).then(() => {
            console.log(novoRating + " Inserido")
        })
        
        return response.json(novoRating)
    }

    async remove (request: Request, response: Response){
        const  { id } = request.params

        const result = await db('players').where('id', id).del()
        updateAll()

        return response.json(result)
    }

    async create (request: Request, response: Response)  {
        const {
            position,
            name ,
            currentRating,
            newRating,
    
        } = request.body

        const trx = await db.transaction();
    
        try {
            await trx('players').insert({
                position,
                name,
                currentRating,
                newRating,
            })
            
            await trx.commit()
            
            // updateAll()

            return response.send()
        }catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }

        
    }
}