// Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição (USANDO O WHILE E FOR).

var contador = 1;
var soma = 0;

while (contador <= 100) {
  soma += contador; 
  contador++;       
}
console.log("A soma de 1 a 100 é:", soma); 

//For

var soma = 0;

for (var soma = 1; soma <= 100; soma++) {
  soma += soma;
}

console.log("A soma de 1 a 100 é:", soma); // Resultado: 5050




