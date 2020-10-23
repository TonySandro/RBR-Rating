// pontosES = mediaRating - ratingAtual = Consulta tabela(DIF)

// pontoPS= 1st:3 2nd:2 3rd:1,5 4ht:1 5ht:0,9 6ht:0,8 7ht:0,7

// Rating Novo = ranting atual + K * (pontosPS - pontosES)


var k = 0;
var pontoPS = 1;

var ratingAtual = 0;

var mediaRating = 114;

// position(1);







pontoES = mediaRating - ratingAtual;

//Falta a tabela DIF para o resultado de pontoES
var pontoES = mediaRating - ratingAtual * (-1);

var ratingNovo = ratingAtual + k * (pontoPS - pontoES);


console.log("Rating Novo = " + ratingNovo);
