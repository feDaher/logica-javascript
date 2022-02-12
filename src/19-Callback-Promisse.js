function upload () {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      console.log("02 - UPLOAD CONCLUIDO")
      resolve()
    }, 2000)//VS Code trabalha em mili-segundos, 2000=2segundos
  })
  
}

async function uploadDefoto (){
  console.log ("01 - INICINANDO UPLOAD")
  await upload()
  console.log("03 - EXECUÇÃO FINALIZADA")
}

uploadDefoto()