let aparicoes = 0

function verificarLetraA(texto){

    aparicoes = 0

    for (let i = 0; i < texto.length; i++) {
        if(texto[i].toLowerCase() === 'a'){
            aparicoes += 1
        }
    }

    if (aparicoes > 0){
        console.log("Na palavra "+texto+" a letra 'a' aparece "+aparicoes+" vez(es)")
    } else {
        console.log("Na palavra "+texto+" a letra 'a' não aparece")
    }
   
}

console.log("Questão 2: ")

verificarLetraA("Abajur")

verificarLetraA("Teste")

console.log("--------------------------------------------------")