
const pessoa = {
  name: "Felipe",
  lastName: "Daher",
}

//Object.keys(): Cria um array com todas as chaves do objeto
console.log(Object.keys(pessoa))

//Object.values(): Cria um array com todos os valores do objeto
console.log(Object.values(pessoa))

//Object.entries() Cria um array com um array de objetos e valores
console.log(Object.entries(pessoa))

const array = (Object.entries(pessoa))
//[['name', 'Felipe'], ['lastName', 'Daher']]

//Exemplo funcional:

const livros = {
  "Livro A": 19.90,
  "Livro B": 97.00,
  "Livro C": 20.00,
}
const values = Object.values(livros)
const soma = values.reduce((val, acc) => val + acc, 0)
console.log(soma)