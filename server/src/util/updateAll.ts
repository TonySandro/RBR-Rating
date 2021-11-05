import db from "../database/connection"
import newRating from "./newRating"

export default async function updateAll (){
    console.log("Function UpdateAll")
    console.log("========================")
    try {
        const ids = await db('players').select({id: 'id'})

        const qtdPlayers = await db('players').count({id: ['id']})
        
        const qtd = Number(qtdPlayers[0].id)


        for (let count = 0; count != qtd; count++) {
            const novoRating = await newRating(ids[count].id)

            await db('players').update({ newRating: novoRating}).where('id', ids[count].id)
        }
        
        return console.log("Update all players")

    }catch (err) {
        return console.log({
            error: 'Unexpected error while creating new player'
        })
    }
}