// pontosES = mediaRating - ratingAtual = Consulta tabela(DIF)

import db from "../database/connection";
import difCalc from "./difCalc";
import pegarRatingK from "./k";
import pegarPosition from "./position";

 export default async function newRating(id: string){
    
     const qtdPlayers = await db('players').count({id: ['id']})
    const result = await db('players').sum({soma: 'currentRating'})
    const result2 = await db('players').select({current: 'currentRating'}).where('id', id)
    const result3 = await db('players').select({position: 'position'}).where('id', id)
    
    
    try {
        const qtd = Number(qtdPlayers[0].id)
        console.log(`Quantidade de players ${qtd}`)

        const mediaRating = Math.ceil(result[0].soma / qtd)
        console.log(`Media do rating ${mediaRating}`)

        const currentRating: number = result2[0].current
        console.log(`Current Rating ${currentRating}`)

        const position: number = result3[0].position
    
    
        const valorK = pegarRatingK(currentRating)
        const pontosPS = pegarPosition(position)
        const valorDif = difCalc(mediaRating, currentRating)

        const newRating = ( currentRating + valorK * ( pontosPS - valorDif ))

        console.log("Novo rating: " + newRating)

        console.log(parseFloat(newRating.toFixed(2))) 
        return parseFloat(newRating.toFixed(2))
        
    } catch (error) {
        console.log(error)
        return error
    }
}