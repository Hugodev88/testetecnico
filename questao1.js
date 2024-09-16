let numero = 20
let fibonacciArray = [0, 1]

function verificarFibonacci(numero){
    
    while(fibonacciArray[fibonacciArray.length - 1] < numero){        
        let proximoNumero = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray.push(proximoNumero);
    }  

    if (fibonacciArray.includes(numero)) {
        console.log(numero+' pertence à sequência de Fibonacci');
    } else {
        console.log(numero+' não pertence à sequência de Fibonacci');
    }

}

console.log("Questão 1: ")

// Testes

verificarFibonacci(numero);

verificarFibonacci(34);

console.log("--------------------------------------------------")