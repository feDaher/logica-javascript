//Exercicio de Tratamento de Erros, na aula do curso, feito do jsfiddle

const API_URL = 'https://jsonplaceholder.typicode.com/userss'
/*
async function getUsers () {

}
*/
//A mesma função, somente fazendo em arrow function

const getUsers = async () => {
	try{
  	const response = await fetch(API_URL)
    if (response.status === 404) throw new Error("Não Encontrado") //usar para mostrar a msg caso encontre o erro
 	 	const data = await response.json()
  	const emails = data.map(({email}) => ({email})) //destructor
    console.log(emails)
  }catch(error){
  	console.log(error.message)
  }
	
}

getUsers()