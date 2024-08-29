let a = Number (prompt("Digite um número"))
let b = Number (prompt("Digite outro número"))

function numeros(num1, num2) {
    
    if (num1 === num2) {
        console.log("Iguais")
    }
    else if (num1 > num2){
        console.log("Maior")
    }

    else {
        console.log("Menor")
    }

    

}

numeros(a, b)