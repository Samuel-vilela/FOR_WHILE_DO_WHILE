// Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição. 

var num1 = 0;

var num2 = 1;


for (var num = 1; num <= 10; num++) { // importante pra caramba #1 
  console.log(num1);

  var contador = num1 + num2; 

  num1 = num2;               
  num2 = contador;         
} 




