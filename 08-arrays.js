/*
//Os array's carregando uma lista de valores/elementos, uma variavel especial
const variavel = 10
//            0      1    2  3      4         5
let array = [true, false, 0, 1, "string", variavel]
// sempre o primeiro elemento conta como 0
array[3] = 50 // mudar o elemento existente dentro do array
console.log(array)
array.pop() //remove o ultimo elemento do array
array.push (1000, "string") //adicionar elementos no array
console.log(array)

let newArray = [10, 20, 30]
console.log(newArray.length)//mostra o tamanho do array (a quantidade de elementos que tem dentro do array)
console.log(newArray)


let newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let i = 0
  while (i < newArray.length){
    console.log("Posição: ", i) //posição/casa do array
    console.log("Elemento:", newArray[i]) //mostra qual elemento esta na casa acima
    i++
  }
 
//Outra forma de fazer o mesmo com o FOR
let newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//declarar a variavel dentro no FOR
for (let i = 0; i < newArray.length; i++){  //FOR: no array se utiliza a variavel dentro e o .lenght de posição, se nao da undefined(indefinido)
  console.log(i)
  console.log(newArray[i])
} */

//Utilizar novas "formulas" para melhorar/facilitar o codigo com as:
// for..in

/*
let newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (let pos in newArray){ //no for..in ele pega a casa onde se encontra o elemento, já o of mostra o elemento dentro dela.
  console.log(pos)
  console.log(newArray[pos])
}

//for..of
for (let pos of newArray){ //no for..of ele pega o VALOR/elemento de dentro da casa do array e mostra, diferente o in que pega a casa
  console.log(pos)
}
*/
//Exercicio: Dado um arry com X numeros, encontrar a media desses numeros.
//media = (soma dos elementos)/tamanho total

const numeros = [10, 20, 30, 50]    //array
let soma = 0                    //para iniciar e alocar o valor da soma
for (let num of numeros){       //para pegar os elemtos do array.
  soma = soma + num
}
console.log("Soma dos valores:", soma)
const media = soma/numeros.length       //soma/tamanho, para colocar o tamanho do array, preicsar colocar .lenght
console.log ("Media:", media)