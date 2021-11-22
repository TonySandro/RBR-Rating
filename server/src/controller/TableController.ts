import { Request, Response } from 'express';
import db from '../database/connection';
import createTableEx from '../util/createTable';

export default class TableController {
    // Ver todas as tabelas criadas no BD
    async viewTables(request: Request, response: Response) {
        const result = await db('sqlite_master').where('type', 'table').then(res => {
            return res
        }).catch(er => {
            console.log(er)
        })

        return response.json(result)
    }

    // Function para criar a tabela diretamente da rota
    async createTable(request: Request, response: Response) {
        const { table } = request.params

        try {
            await createTableEx(table)

            return response.send(200)
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
                error: 'Unexpected error while delete table.'
            })
        }
    }
}