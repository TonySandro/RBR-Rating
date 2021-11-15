import db from "../database/connection"
import newRating from "./newRating"

export default async function updateAll(table?: string) {
    try {

        const ids = await db(table).select({ id: 'id' })

        const qtdPlayers = await db(table).count({ id: ['id'] })

        const qtd = Number(qtdPlayers[0].id)


        for (let count = 0; count != qtd; count++) {
            const novoRating = await newRating(ids[count].id, table)
            if (ids[count] !== undefined) {
                try {
                    await db(table).update({ newRating: novoRating }).where('id', ids[count].id)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    } catch (err) {
        return console.log({
            error: 'Unexpected error while creating new player'
        })
    }
}