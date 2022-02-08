/*
function ola () {
  console.log("OLA")
}
ola()

const arrowFuction = () => {
  console.log("ARROW OLA")
}
arrowFuction ()
//Essa sao duas formas de declarar funções

const soma = (A, B) => {    
  return A+B
}
console.log (soma(10, 20)) // para deixar a ArrowFuntion mais enxuta podemos usar sem as {} semelhante aos ifs...
//... como é simples, com somente 1 parametro. como abaixo:
*/
const soma = (A, B) => A+B
const ePar = num => num % 2 === 0
console.log (soma(10, 20))
console.log(ePar(2))
 