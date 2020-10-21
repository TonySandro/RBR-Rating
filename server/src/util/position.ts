export default function pegarPosition(posicao: number ){
    var pontoPS: number;
    var position = posicao;

    if (position >= 14) {
         pontoPS = 0;
    }else if (position <= 4) {
        switch (position) {
            case 1:
                pontoPS = 3;
                console.log("Primeiro")
                break;
            case 2:
                pontoPS = 2;
                console.log("Segundo")
                break;
            case 3:
                pontoPS = 1.5;
                console.log("Terceiro")
                break;
            case 4:
                pontoPS = 1;
                console.log("Quarto")
                break;
        
            default:
                break;
        }
    } else { 
        // for (let p = 4; p != position; p++) {
        //     pontoPS = pontoPS - 0.1;
        //     console.log(`Valor de p: ${p}, valor ${pontoPS}`)
        // }
        let p = 4;
        while ( p != position ){
            pontoPS = pontoPS - 0.1;
            p++;
            console.log(`Valor de p: ${p}, valor ${pontoPS}`)
        }
    }
    return pontoPS
}