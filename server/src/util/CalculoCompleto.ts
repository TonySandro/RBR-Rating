function pegarRatingK(ratingAtual: number){
    var k;
    if (ratingAtual < 999) {
        k = 40;
    } else if (ratingAtual > 999 && ratingAtual < 1999) {
        k = 20;
    } else if (ratingAtual > 1999 && ratingAtual < 2999) {
        k = 10;
    };
    return k;
}

var pontoPS: number;

 function pegarPosition(posicao: number ){
    var position = posicao;

    if (position >= 14) {
         pontoPS = 0;
    }else if (position <= 4) {
        switch (position) {
            case 1:
                pontoPS = 3;
                break;
            case 2:
                pontoPS = 2;
                break;
            case 3:
                pontoPS = 1.5;
                break;
            case 4:
                pontoPS = 1;
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
        let p = 4;
        while ( p != position ){
            pontoPS = pontoPS - 0.1;
            p++;
            console.log(`Valor de p: ${p}, valor ${pontoPS}`)
        }
    }
    return pontoPS
}

var dif, positionDif = 0;
var sup = 50, inf = 50;
var pontoES = 800;

function calcSupInf() {
    sup = sup + positionDif;
    inf = inf - positionDif;
}

// function Dif(pontoES: number){

    switch (true) {
        case (pontoES >= 0 && pontoES <= 3):
            positionDif = 0;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 4 && pontoES <= 10):
            positionDif = 1;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 11 && pontoES <= 17):
            positionDif = 2;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 18 && pontoES <= 25):
            positionDif = 3;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 26 && pontoES <= 32):
            positionDif = 4;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 33 && pontoES <= 39):
            positionDif = 5;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 40 && pontoES <= 46):
            positionDif = 6;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 47 && pontoES <= 53):
            positionDif = 7;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 54 && pontoES <= 61):
            positionDif = 8;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 62 && pontoES <= 68):
            positionDif = 9;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 69 && pontoES <= 76):
            positionDif = 10;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 77 && pontoES <= 83):
            positionDif = 11;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 84 && pontoES <= 91):
            positionDif = 12;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 92 && pontoES <= 98):
            positionDif = 13;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 99 && pontoES <= 106):
            positionDif = 14;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 107 && pontoES <= 113):
            positionDif = 15;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 114 && pontoES <= 121):
            positionDif = 16;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 122 && pontoES <= 129):
            positionDif = 17;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 130 && pontoES <= 137):
            positionDif = 18;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 138 && pontoES <= 145):
            positionDif = 19;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 146 && pontoES <= 153):
            positionDif = 20;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 154 && pontoES <= 162):
            positionDif = 21;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 163 && pontoES <= 170):
            positionDif = 22;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 171 && pontoES <= 179):
            positionDif = 23;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;

        case (pontoES >= 180 && pontoES <= 188):
            positionDif = 24;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 189 && pontoES <= 197):
            positionDif = 25;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 198 && pontoES <= 206):
            positionDif = 26;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 207 && pontoES <= 215):
            positionDif = 27;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 216 && pontoES <= 225):
            positionDif = 28;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 226 && pontoES <= 235):
            positionDif = 29;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 236 && pontoES <= 245):
            positionDif = 30;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 246 && pontoES <= 256):
            positionDif = 31;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 257 && pontoES <= 267):
            positionDif = 32;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 268 && pontoES <= 278):
            positionDif = 33;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 279 && pontoES <= 290):
            positionDif = 34;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 291 && pontoES <= 302):
            positionDif = 35;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 303 && pontoES <= 315):
            positionDif = 36;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 316 && pontoES <= 328):
            positionDif = 37;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 329 && pontoES <= 344):
            positionDif = 38;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 345 && pontoES <= 357):
            positionDif = 39;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 358 && pontoES <= 374):
            positionDif = 40;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 375 && pontoES <= 391):
            positionDif = 41;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 392 && pontoES <= 411):
            positionDif = 42;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 412 && pontoES <= 432):
            positionDif = 43;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 433 && pontoES <= 456):
            positionDif = 44;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 457 && pontoES <= 484):
            positionDif = 45;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 485 && pontoES <= 517):
            positionDif = 46;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 518 && pontoES <= 559):
            positionDif = 47;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 560 && pontoES <= 619):
            positionDif = 48;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 620 && pontoES <= 735):
            positionDif = 49;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
            
        case (pontoES >= 735):
            positionDif = 50;
            calcSupInf();
            console.log(`Sup ${sup} --- Inf ${inf}`)
            break;
    
        default:
            console.log("default err difcalc")
            break;
    }

// }