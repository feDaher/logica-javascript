/*
function ola (){
  return "ola" // return é uma palavra reservada onde marca o fim da função.
  console.log("olá")
}
const variavel = ola() //podemos atribuir uma variavel a função, precisamos colocar os (), para chamar a funação.
console.log(variavel)
*/

function soma (A, B) {
 return A + B
}
function sub (A, B){
  return A - B
}
function div (A, B){
  return A / B
}
function mult (A, B){
  return A * B
}
function calculadora (tipo) {
  const A = 1
  const B = 2
  if (tipo === "soma") return soma (A, B)
  else if (tipo === "sub") return sub (A, B)
 else if (tipo === "div") return div (A, B)
 else (tipo === "mult"); return mult (A, B)
}
//const resultado = calculadora("mult")
//console.log(resultado)

/*
Exercicio: faça uma função que verifica se o numero é par ou nao
*/

function par (num){
  return num % 2 === 0
}
//const resultado = par(9)
//console.log(resultado)

/*
Exercicio2: Mostrar os numeros pares, de 0 a 100
e 100 a 200
for (let i=1; i <= 100; i++){
  if(par(i)) console.log(i)
}
*/
for (let i=100; i >= 100 && i <= 200; i++){
  if(par(i)) console.log(i)
}