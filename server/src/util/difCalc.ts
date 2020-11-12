export default function difCalc(mediaRating: number, ratingAtual: number) {
    var media = mediaRating
    var rating = ratingAtual

    var positionDif = 0;
    var sup = 50, inf = 50;
    var diferenca = media - rating
    var pontoES: number = 0

function calcSupInf() {
    sup = (sup + positionDif) * 0.01
    inf = (inf + positionDif) * 0.01

    if (rating >= media) {
        pontoES = sup
    }else pontoES = inf
}

    switch (true) {
        case (diferenca >= 0 && diferenca <= 3):
            positionDif = 0;
            calcSupInf();
            break;
            
        case (diferenca >= 4 && diferenca <= 10):
            positionDif = 1;
            calcSupInf();
            break;

        case (diferenca >= 11 && diferenca <= 17):
            positionDif = 2;
            calcSupInf();
            break;

        case (diferenca >= 18 && diferenca <= 25):
            positionDif = 3;
            calcSupInf();
            break;

        case (diferenca >= 26 && diferenca <= 32):
            positionDif = 4;
            calcSupInf();
            break;

        case (diferenca >= 33 && diferenca <= 39):
            positionDif = 5;
            calcSupInf();
            break;

        case (diferenca >= 40 && diferenca <= 46):
            positionDif = 6;
            calcSupInf();
            break;

        case (diferenca >= 47 && diferenca <= 53):
            positionDif = 7;
            calcSupInf();
            break;

        case (diferenca >= 54 && diferenca <= 61):
            positionDif = 8;
            calcSupInf();
            break;

        case (diferenca >= 62 && diferenca <= 68):
            positionDif = 9;
            calcSupInf();
            break;

        case (diferenca >= 69 && diferenca <= 76):
            positionDif = 10;
            calcSupInf();
            break;

        case (diferenca >= 77 && diferenca <= 83):
            positionDif = 11;
            calcSupInf();
            break;

        case (diferenca >= 84 && diferenca <= 91):
            positionDif = 12;
            calcSupInf();
            break;

        case (diferenca >= 92 && diferenca <= 98):
            positionDif = 13;
            calcSupInf();
            break;

        case (diferenca >= 99 && diferenca <= 106):
            positionDif = 14;
            calcSupInf();
            break;

        case (diferenca >= 107 && diferenca <= 113):
            positionDif = 15;
            calcSupInf();
            break;

        case (diferenca >= 114 && diferenca <= 121):
            positionDif = 16;
            calcSupInf();
            break;

        case (diferenca >= 122 && diferenca <= 129):
            positionDif = 17;
            calcSupInf();
            break;

        case (diferenca >= 130 && diferenca <= 137):
            positionDif = 18;
            calcSupInf();
            break;

        case (diferenca >= 138 && diferenca <= 145):
            positionDif = 19;
            calcSupInf();
            break;

        case (diferenca >= 146 && diferenca <= 153):
            positionDif = 20;
            calcSupInf();
            break;

        case (diferenca >= 154 && diferenca <= 162):
            positionDif = 21;
            calcSupInf();
            break;

        case (diferenca >= 163 && diferenca <= 170):
            positionDif = 22;
            calcSupInf();
            break;

        case (diferenca >= 171 && diferenca <= 179):
            positionDif = 23;
            calcSupInf();
            break;

        case (diferenca >= 180 && diferenca <= 188):
            positionDif = 24;
            calcSupInf();
            break;
            
        case (diferenca >= 189 && diferenca <= 197):
            positionDif = 25;
            calcSupInf();
            break;
            
        case (diferenca >= 198 && diferenca <= 206):
            positionDif = 26;
            calcSupInf();
            break;
            
        case (diferenca >= 207 && diferenca <= 215):
            positionDif = 27;
            calcSupInf();
            break;
            
        case (diferenca >= 216 && diferenca <= 225):
            positionDif = 28;
            calcSupInf();
            break;
            
        case (diferenca >= 226 && diferenca <= 235):
            positionDif = 29;
            calcSupInf();
            break;
            
        case (diferenca >= 236 && diferenca <= 245):
            positionDif = 30;
            calcSupInf();
            break;
            
        case (diferenca >= 246 && diferenca <= 256):
            positionDif = 31;
            calcSupInf();
            break;
            
        case (diferenca >= 257 && diferenca <= 267):
            positionDif = 32;
            calcSupInf();
            break;
            
        case (diferenca >= 268 && diferenca <= 278):
            positionDif = 33;
            calcSupInf();
            break;
            
        case (diferenca >= 279 && diferenca <= 290):
            positionDif = 34;
            calcSupInf();
            break;
            
        case (diferenca >= 291 && diferenca <= 302):
            positionDif = 35;
            calcSupInf();
            break;
            
        case (diferenca >= 303 && diferenca <= 315):
            positionDif = 36;
            calcSupInf();
            break;
            
        case (diferenca >= 316 && diferenca <= 328):
            positionDif = 37;
            calcSupInf();
            break;
            
        case (diferenca >= 329 && diferenca <= 344):
            positionDif = 38;
            calcSupInf();
            break;
            
        case (diferenca >= 345 && diferenca <= 357):
            positionDif = 39;
            calcSupInf();
            break;
            
        case (diferenca >= 358 && diferenca <= 374):
            positionDif = 40;
            calcSupInf();
            break;
            
        case (diferenca >= 375 && diferenca <= 391):
            positionDif = 41;
            calcSupInf();
            break;
            
        case (diferenca >= 392 && diferenca <= 411):
            positionDif = 42;
            calcSupInf();
            break;
            
        case (diferenca >= 412 && diferenca <= 432):
            positionDif = 43;
            calcSupInf();
            break;
            
        case (diferenca >= 433 && diferenca <= 456):
            positionDif = 44;
            calcSupInf();
            break;
            
        case (diferenca >= 457 && diferenca <= 484):
            positionDif = 45;
            calcSupInf();
            break;
            
        case (diferenca >= 485 && diferenca <= 517):
            positionDif = 46;
            calcSupInf();
            break;
            
        case (diferenca >= 518 && diferenca <= 559):
            positionDif = 47;
            calcSupInf();
            break;
            
        case (diferenca >= 560 && diferenca <= 619):
            positionDif = 48;
            calcSupInf();
            break;
            
        case (diferenca >= 620 && diferenca <= 735):
            positionDif = 49;
            calcSupInf();
            break;
            
        case (diferenca >= 735):
            positionDif = 50;
            calcSupInf();
            break;
    
        default:
            console.log("default err difcalc")
            break;
    }

    console.log("Pontos Esperados: " + pontoES)
    return pontoES
}