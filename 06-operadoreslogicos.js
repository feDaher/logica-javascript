/*
Exercicio:
Elabore um algoritmo que dada a idade de um nadador
classifique-o em uma ads seguintes categorias:
Intantil A = 5 a 7 anos
Intantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maior de 18 anos

Operadores Logicos:
OU = || - a condição é verdadeira se UM ou Outro for verdadeiro
E = && - a codição é verdadeira se TODOS forem verdadeiros


const idade = 100

if (idade >= 5 && idade <= 7){
  console.log("Infantil A")
} else if (idade >= 8 && idade <= 11) {
  console.log("Infantil B")
}  else if (idade >= 12 && idade <= 13) {
  console.log("Juvenil A")
} else if (idade >= 14 && idade <= 17) {
  console.log("Juvenil B")
} else if (idade >= 18) {
  console.log("Adultos")
}
*/
//Como é somente uma linha dentro os ifs e else if, pode ser feito sem as chaves, colocando na frente.

const idade = 4
if (idade >= 5 && idade <= 7) console.log("Infantil A")
else if (idade >= 8 && idade <= 11) console.log("Infantil B")
else if (idade >= 12 && idade <= 13) console.log("Juvenil A")
else if (idade >= 14 && idade <= 17) console.log("Juvenil B")
else if (idade >= 18) console.log("Adultos")
else if (idade <= 4) console.log("Muito novo para o registro, somente acima de 5 anos.")