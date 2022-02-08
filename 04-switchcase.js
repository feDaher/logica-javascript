// comentário por uma linha e usar o /* para comentario de mais linha
/* Dado um numero, construir uma logica para imprimir o nome dos mes do numero:
exemplo:

1- console.log("Janeiro")
2- console.log("Fevereiro")
...
!== 1 a 12 - console.log ("Mês Inexistente")
*/

// quando se tem somente uma linha dentro do if/else/else if pode ser colocado sem chaves e na mesma linha

const numeromes = 13
if (numeromes === 1)console.log("Janeiro")
else if (numeromes ===2) console.log("Feveiro") 
else if (numeromes ===3)console.log("Março")
else if (numeromes ===4) console.log("Abril")
else if (numeromes ===5)console.log("Maio")
else if (numeromes ===6)console.log("Junho")
else if (numeromes ===7)console.log("Julho")
else if (numeromes ===8)console.log("Agosto")
else if (numeromes ===9)console.log("Setembro")
else if (numeromes ===10)console.log("Outubro")
else if (numeromes ===11)console.log("Novembro")
else if (numeromes ===12)console.log("Dezembro")
else console.log("Mês Inexistente")

/*Usar o SWITCH em casos de repetição de variavel igual para imprimir um valor diferente, em casos expecificos somente.
Caso precise trocar as variaveis ficaria muito mais facil e rapido.*/

//const numeromes = 13
switch (numeromes) {
  case 1:
    console.log("Janeiro")
  break
  case 2:
    console.log("Feveiro")
  break
  case 3:
    console.log("Março")
  break
  //assim sucessivamente
  default: //se nenhum caso entre no switch usar o default
    console.log("Mes Inexistente")
    break
}
