export default function pegarRatingK(ratingAtual: number){
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