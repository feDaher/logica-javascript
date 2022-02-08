/*
Crie um algoritmo para calular o fatorial de um numero n!

Obs.: O gatorial de um numero é calculado pela multiplicação
desse numero por todos os seus antecessores ate chegar ao 1.
Ex: 2! = 2*1
3! = 3*2*1
4! = 4*3*2*1
*/
function fatorial (n){
  let resposta = 1
  while(n >= 2){
    resposta = resposta * n
    n--
  }
  return resposta
}
const n = 5
const resultado = fatorial(n)
console.log(resultado)
