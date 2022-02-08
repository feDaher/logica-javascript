/*
Crie um algoritmo para calular o fatorial de um numero n!

Obs.: O gatorial de um numero é calculado pela multiplicação
desse numero por todos os seus antecessores ate chegar ao 1.
Ex: 2! = 2*1
3! = 3*2*1
4! = 4*3*2*1
*/

function fatorial (n) {
  if (n < 0) return "Nao existe fatorial de numero negativo"
  if (n === 0) return 0
  if (n <= 1) return n
  return fatorial (n-1)*n
}

const numero = 5
const resposta = fatorial(numero)
console.log(resposta)
