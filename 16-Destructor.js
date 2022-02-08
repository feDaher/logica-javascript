const pessoa = {
  Nome: "Felipe",
  Sobrenome: "Daher",
  Idade: 28,
}

/* Jeito "antigo":
const nome = pessoa.Nome
console.log(nome)
*/
const {Nome, Idade, Sobrenome} = pessoa
//const nome = pessoa.Nome
//const idade = pessoa.Idade
console.log(Nome)
console.log (Sobrenome)
console.log (Idade)

//Serve para adicionar ou substituir dados no objeto
const pessoaAtualizada = {
  ...pessoa,
  Idade: 29,
  Senha: "456",
}
console.log (pessoaAtualizada)


const array = [1, 2 , 3, 4]
const [a, b] = array

console.log(a)
console.log(b)

const newArray = [0, ...array, 5]
console.log(newArray)
