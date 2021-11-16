import { Request, Response } from 'express';
import db from '../database/connection';
import newRating from '../util/newRating';
import updateAll from '../util/updateAll';

export default class PlayerController {
    async view(request: Request, response: Response) {
        const { table } = request.params
        const result = await db(`${table}`).select("*")

        return response.json(result)
    }

    // Ver todas as tabelas criadas no BD
    async viewTables(request: Request, response: Response) {
        const result = await db('sqlite_master').where('type', 'table').then(res => {
            return res
        }).catch(er => {
            console.log(er)
        })

        return response.json(result)
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
        } = request.body

        const trx = await db.transaction();

        try {
            await trx(`${table}`).insert({
                position,
                name,
                currentRating,
                newRating,
            }).then(res => {
                console.log("Tudo certo aqui")
                return res
            }).catch(err => {
                console.log(err, "erro aqui")
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

    async createTable(request: Request, response: Response) {
        const trx = await db.transaction();

        try {
            await trx.schema.createTable('Rally', table => {
                table.increments('id').primary();
                table.integer('position').notNullable();
                table.string('name').notNullable();
                table.integer('currentRating');
                table.integer('newRating');
            });

            await trx.commit()
            return response.send()
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }
    }

    async deleteTable(request: Request, response: Response) {
        const { table } = request.params

        const trx = await db.transaction();

        try {
            await trx.schema.dropTable(`${table}`);
            await trx.commit()

            return response.send()
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new player'
            })
        }
    }
}