/*
const array = [1, 5, 6, 10, 11, 15, 29, 21, 22, 30]

// forEach: passa por todos os elementos doa array
array.forEach((elemento, posicao) => {
  console.log(`${elemento} - Posicao: ${posicao}`)
  //O metodo acima substitui o de baixo:
  //console.log(elemento)
  //console.log(posicao)
})

//find: retorna o elemento
const valorElemento = array.find ((elemento) => // elemento === 10)
{
  return elemento === 10
})
console.log(valorElemento)

//findIndex: retorna a posição do elemento no array
const posicao = array.findIndex ((elemento) => elemento === 21)
 //todos podem ser feitos dessa maneira mais enxuta, quando se tem somente um elemento dentro das chaves.
console.log(posicao)

//some: retorna true se pelo menos um numero satisfazer a condição
const some= array.some ((elemento) => {
  if (elemento >= 31) return true
  return false
})
console.log(some)

//every: retorna true se TODOS os numero satisfazerem a condição
const every= array.every ((elemento) => {
  if (elemento >= 0) return true
  return false
})
console.log(every)
*/

//Aula: 2

//splice: Corta o array. Primeiro: Inicio do corte, segundo: é a quantidade
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(newArray.splice()) //primeiro: quantidade que irá pular no array, segundo: quantidade que irá cortar para mostrar

//map: alterar os valores dentro do array seguindo uma regra
console.log(newArray.map((elemento) => {
  return elemento * 2
}))

//filter: filtrar os elementos dentro do array
console.log(newArray.filter((elemento) => { 
  return elemento % 2 === 0  //filtrar todos os pares
}))

console.log(newArray.filter((elemento) => { 
  return elemento % 2 === 1  //filtrar todos os impares
}))

//reduce: reduz o array para outro elemento

console.log(newArray.reduce((acumulado, elemento) => {
  return acumulado + elemento
}, 0))


//forEach, splice, map, filter: Essas 4 sao as principais e irá usar muito no dia-a-dia
