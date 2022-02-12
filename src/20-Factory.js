function Pessoa (nome, sobrenome) {
  let pessoa = {
    nome,
    sobrenome,
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa ("Feipe", "Daher")
const pessoaB = Pessoa ("Claudia", "Daher")

//console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto)
console.log("Nome completo pessoa A:", pessoaA.nomeCompleto)              