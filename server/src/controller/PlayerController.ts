import { Request, Response } from 'express'
import db from '../database/connection';
import newRating from '../util/newRating';

export default class PlayerController {
    async updateAll (request: Request, response: Response){
        const ids = await db('players').select({id: 'id'})

        const qtdPlayers = await db('players').count({id: ['id']})
        
        const qtd = Number(qtdPlayers[0].id)


        for (let count = 0; count != qtd; count++) {
            const novoRating = await newRating(ids[count].id)

            await db('players').update({ newRating: novoRating}).where('id', ids[count].id)
        }

        return response.json(qtd)
    }

    async update(request: Request, response: Response){
        const { id } = request.params
        //teste 
        // const count = await db('players').count()
        // console.log(count[0])

        const novoRating = await newRating(id)

        const result = await db('players').update({ newRating: novoRating }).where('id', id).then(() => {
            console.log(novoRating + " Inserido")
        })
        
        return response.json(novoRating)
    }

    async remove (request: Request, response: Response){
        const  { id } = request.params

        const result = await db('players').where('id', id).del()

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
        
            return response.send()
        }catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }
    }
}