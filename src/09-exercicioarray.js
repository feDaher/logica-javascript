/*
A prefeitura possui uma ista com a i dade de cada morador e quer saber a quantidade de moradores que sao eleitores 
obrigatorios, facultativos ou nao eleitores de acordo com a sinformaçoes abiaxo:

Obrigatorio: entre 18 a 69 anos
Facultativo: entre 16 e 17 anos ou acima de 70 anos
Nao eleitor: Abaixo de 16 anos
*/

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorio = 0
let facultativo = 0
let naoeleitor = 0

for (let idade of lista){
  if (idade >= 18 && idade <= 69){
    obrigatorio = obrigatorio + 1
  }
  else if (idade <16)naoeleitor++
  else if (idade >= 70)facultativo++
  }
console.log("Obrigatorio: ", obrigatorio)
console.log("Nao Eleitor: ", naoeleitor)
console.log("Facultativo: ", facultativo)
console.log("Os Obrigatorios sao: ")
for (let obg of lista){
  if (obg >= 18 && obg <= 69 ){ 
    console.log(obg)
  }
}
console.log("Os Nao Eleitores sao: ")
for (let naoel of lista){
  if (naoel < 16 ){
    console.log(naoel)
}
}
console.log("Os Facultativos sao: ")
for (let facul of lista){
  if (facul >= 70){
    console.log(facul)
  }
}