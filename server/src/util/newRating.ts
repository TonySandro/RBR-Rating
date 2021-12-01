// pontosES = mediaRating - ratingAtual = Consulta tabela(DIF)

import db from "../database/connection";
import difCalc from "./difCalc";
import pegarRatingK from "./k";
import pegarPosition from "./position";

export default async function newRating(id: string, table?: string, media?: number) {

    try {
        const qtdPlayers = await db(table).count({ id: ['id'] })
        const result = await db(table).sum({ soma: 'currentRating' })
        const result2 = await db(table).select({ current: 'currentRating' }).where('id', id)
        const result3 = await db(table).select({ position: 'position' }).where('id', id)

        const qtd = Number(qtdPlayers[0].id)
        // console.log(`Quantidade de players ${qtd}`)

        const mediaRating = Math.ceil(result[0].soma / qtd)
        // console.log(`Media do rating ${mediaRating}, ${result[0].soma}`)

        // Se não houver currentRating no banco, significa que é um novo piloto, então começa com 100pts
        let currentRating = 100
        if (result2[0].current !== 0 && media === undefined) {
            currentRating = result2[0].current
        } else if (media !== undefined) {
            currentRating = media
        }
        // cosole.log(`Current Rating ${currentRating}, result2 ${result2}`)

        const position: number = result3[0].position

        const valorK = pegarRatingK(currentRating)
        const pontosPS = pegarPosition(position)
        const valorDif = difCalc(mediaRating, currentRating)

        const newRating = (currentRating + valorK * (pontosPS - valorDif))

        return parseFloat(newRating.toFixed(2))
    } catch (error) {
        console.log(error)
        return error
    }
}