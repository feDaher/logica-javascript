/*
const num = 10 //variavel
const array = [10, 20] //variavel array
*/
const pessoa = {  // varivel para objetos
  nome: "Felipe", 
  idade: 28,
  casado: true,
  notas: [5,8,10],
  endereco: {
    rua: "rua x y z",
    numero: 310,
    apto: 403,
    cidade:{
      nome: "Manhuaçu",
      cep: "36904-198"
    }
  }
}

//Uma outra forma de procurar o elemento dentro o obejto é utlizando a seguinte expressao:
console.log(pessoa.nome) // e assim sucessivamente para os outros elementos
console.log(pessoa["nome"])
console.log(pessoa["idade"])
console.log(pessoa["casado"])
console.log(pessoa["notas"][2]) //console.log(pessoa.notas[2])
console.log(pessoa["endereco"]["rua"]) //console.log(pessoa.endereco.rua)
console.log(pessoa["endereco"]["numero"])
console.log(pessoa["endereco"]["apto"])
console.log(pessoa["endereco"]["cidade"]["nome"])
console.log(pessoa["endereco"]["cidade"]["cep"])

//Passar um array dentro do objeto:
const array = [pessoa, pessoa]
console.log(array)