//Laços Simples
/*

Usar a palavra reservada WHILE (enquanto)
Usar a palavra reservada DO (faça)
Usar a palavra reservada FOR (por)

let num = 0
while (num <=10){
  console.log(num)
  num = num + 1 //num++ soma +1 sao iguais.
}
console.log("Finalizado")

let num = 0
do{
  console.log(num)
  num++
} while (num <= 10)

let num = 0
while (num <= 98){
  num = num + 2 
  console.log("Numeros pares: ", num)
}

//outra forma de fazer mostrar os pares
let num = 1
while (num <=100){
  if (num % 2 === 0) console.log(num)
  num++
}
*/
// for primeiro coloca a variavel, segundo a condição de saida, terceiro o que o for ira executar nas repetições

for (let i = 0; i <= 10; i++){ // o i++ é igual o i= i+1
  console.log(i)
}

for (let i = 0; i <= 100; i= i+2){  //mostrar somente os numeros pares
  console.log(i)
}