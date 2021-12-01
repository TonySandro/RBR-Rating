import { Request, Response } from 'express';
import db from '../database/connection';
import newRating from '../util/newRating';
import updateAll from '../util/updateAll';
import createTableEx from '../util/createTable';
import updateUser from '../util/updateUser';
import orderRank from '../util/orderRank';

export default class PlayerController {
    async view(request: Request, response: Response) {
        try {
            const { table } = request.params
            const result = await db(`${table}`).select("*")

            const resultRank = await orderRank(result)

            return response.json(resultRank)
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
        const {
            position,
            name,
            currentRating,
            newRating,
            media
        } = request.body

        try {
            await db(`${table}`).select("*")
        } catch (err) {
            await createTableEx(table)
        }

        try {
            const checkAddUser = await db(`${table}`).where('name', name)
            if (checkAddUser[0] === undefined) {
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
            } else {
                updateUser(checkAddUser[0].id, table, checkAddUser[0].newRating, position)
            }
            updateAll(table, media)

            return response.send()
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }


    }

}