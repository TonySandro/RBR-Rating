// pontosES = mediaRating - ratingAtual = Consulta tabela(DIF)

import db from "../database/connection";
import difCalc from "./difCalc";
import pegarRatingK from "./k";
import pegarPosition from "./position";

// pontoPS= 1st:3 2nd:2 3rd:1,5 4ht:1 5ht:0,9 6ht:0,8 7ht:0,7

// Rating Novo = ranting atual + K * (pontosPS - pontosES)

// var k = 0;
// var pontoPS = 1;

// var ratingAtual = 0;

// var mediaRating = 114;

// position(1);
// pontoES = mediaRating - ratingAtual;
//Falta a tabela DIF para o resultado de pontoES
// var pontoES = mediaRating - ratingAtual * (-1);

// var ratingNovo = ratingAtual + k * (pontoPS - pontoES);


// console.log("Rating Novo = " + ratingNovo);



 export default async function newRating(id: string){
    // const { id } = request.params

    const result = await db('players').sum({soma: 'currentRating'})
    const result2 = await db('players').select({current: 'currentRating'}).where('id', id)
    const result3 = await db('players').select({position: 'position'}).where('id', id)


    const mediaRating: number = result[0].soma
    const currentRating: number = result2[0].current
    const position: number = result3[0].position
    
    
    const valorK = pegarRatingK(currentRating)
    const pontosPS = pegarPosition(position)
    const valorDif = difCalc(mediaRating, currentRating)

    const newRating = (currentRating + valorK * (pontosPS - valorDif))

    console.log(parseFloat(newRating.toFixed(2))) 
    return parseFloat(newRating.toFixed(2))
}