export default function pegarRatingK(ratingAtual: number){
    var k: number = 0
    const rating: number = ratingAtual
    if (rating < 999) {
        k = 40;
    } else if (rating > 999 && rating < 1999) {
        k = 20;
    } else if (rating > 1999 && rating < 2999) {
        k = 10;
    };
    console.log("Valor de k: " + k)
    return k;
}