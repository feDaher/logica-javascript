/* Exercicio 1:
Joao, um pescador, gostaria de controlar o rendimento diario de seu trabalho.
Toda Vez que el tras um peso de peixes maior que o estabelecido pelo regulamento de pescado estado de SP,
50 quilos, deve pagar uma multa de R$4,00 por quilo excedente. Joao percisa que voce faça um script que leia o peso
do peixe de Joao e verifica se ha ou nao excesso. Se houver, gravar na variavel "exesso e na variavel "multa" o valor
da multa que joao deverá pagar.



const limite = 50 //limite definido pelo exercicio
const pagmulta = 4 // valor da multa pago em R$ pelo execesso
const pesopeixe = 10 // peso do peixe que joao levará
let execesso  //execesso de peso
let multa  // valor multa

if (pesopeixe > limite) {
  execesso = pesopeixe - limite
} else {
  execesso = 0
}
if (execesso === 0){
  console.log("Liberado, Sem Multa")
} else {
  multa = execesso * pagmulta
  console.log("A multa será de", "R$", multa, "reais")
}
*/
//ou usando o if em uma so linha de uma forma mais "enxuta":

const limite = 50 //limite definido pelo exercicio
const pagmulta = 4 // valor da multa pago em R$ pelo execesso
const pesopeixe = 100 // peso do peixe que joao levará
let execesso = pesopeixe > limite ? pesopeixe - limite : 0
let multa = execesso * pagmulta
console.log("Excesso: ", execesso)
console.log("Multa: R$", multa)