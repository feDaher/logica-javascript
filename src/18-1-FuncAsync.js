// Exercicio feito no site https://jsfiddle.net/1tcqk79w/

const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
	const response = await fetch(API_URL)
  const data = await response.json()
  
  const userEmails = data.map((obj) => {
  return {
  	email: obj.email
  }
  })
  console.log(userEmails) 
  //ou
  const userEmailss = data.map(({email}) => {
  return {
  	email
  }
  })
  console.log(userEmailss) 
  //ou
  const userEmailsss = data.map (({ email}) =>
  email //email sem os objetos
  )
  console.log(userEmailsss)
  //ou
  const userEmailssss = data.map (({ email}) =>
  	({email}) //email com os objetos mais enxuto igual os de cima
  )
  console.log(userEmailssss) 
}
getUsers ()