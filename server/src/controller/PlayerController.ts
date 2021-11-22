import { Request, Response } from 'express';
import db from '../database/connection';
import newRating from '../util/newRating';
import updateAll from '../util/updateAll';
import createTableEx from '../util/createTable';

export default class PlayerController {
    async view(request: Request, response: Response) {
        try {
            const { table } = request.params
            const result = await db(`${table}`).select("*")

            return response.json(result)
        } catch (err) {
            return err
        }
    }

    // Atualiza o rating de todos os pilotos
    async updateAll(response: Response) {
        // table?: string
        try {
            updateAll('players')
            return response.send(200)
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected error while update all players'
            })
        }
    }

    async update(request: Request, response: Response) {
        const { id, table } = request.params

        const novoRating = await newRating(id, table)

        await db(`${table}`).update({ newRating: novoRating }).where('id', id).then(() => {
            console.log(novoRating + " Inserido")
        })
        updateAll(table)

        return response.json(novoRating)
    }

    async remove(request: Request, response: Response) {
        const { id, table } = request.params

        const result = await db(`${table}`).where('id', id).del()
        updateAll(table)

        return response.json(result)
    }

    async create(request: Request, response: Response) {
        const { table } = request.params

        try {
            await db(`${table}`).select("*")
        } catch (err) {
            await createTableEx(table)
        }

        try {
            const {
                position,
                name,
                currentRating,
                newRating,
            } = request.body

            const trx = await db.transaction();
            await trx(`${table}`).insert({
                position,
                name,
                currentRating,
                newRating,
            }).then(res => {
                return res
            }).catch(err => {
                console.log(err, " insert error.")
            })

            await trx.commit()

            updateAll(table)

            return response.send()
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }


    }

}