export default function pegarPosition(posicao: number) {
    var pontoPS = 1;
    var position = posicao;

    if (position >= 22) {
        pontoPS = 0;
    } else if (position <= 8) {
        switch (position) {
            case 1:
                pontoPS = 3;
                break;
            case 2:
                pontoPS = 2;
                break;
            case 3:
                pontoPS = 1.9;
                break;
            case 4:
                pontoPS = 1.7;
                break;
            case 5:
                pontoPS = 1.5;
                break;
            case 6:
                pontoPS = 1.3;
                break;
            case 7:
                pontoPS = 1.1;
                break;
            case 8:
                pontoPS = 0.9;
                break;

            default:
                console.log("err: default position")
                break;
        }
    } else {
        // for (let p = 4; p != position; p++) {
        //     pontoPS = pontoPS - 0.1;
        //     console.log(`Valor de p: ${p}, valor ${pontoPS}`)
        // }

        let p = 0.9; //posição 
        while (p != position) {
            pontoPS = pontoPS - 0.1;
            p++;
        }
    }

    console.log(`Posição: ${position}, valor ${pontoPS}`)
    return pontoPS
}