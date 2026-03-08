

let valores = []
let numeroAtual = []
let operador = ""


function vetor(numero){
    numeroAtual += numero
   if(operador !== ""){
    document.getElementById("res").innerText = 
    valores[0] + "" + operador + " " + numeroAtual
   }else{
   document.getElementById("res").innerText = numeroAtual

   }

}

function definirOperador(op){
    valores.push(Number(numeroAtual))
    numeroAtual = ""
    operador = op

    document.getElementById("res").innerText = numeroAtual + "" + operador
}

function calcular(){
    valores.push(Number(numeroAtual))
    numeroAtual = ""
    if(valores.length < 2){
        alert("digite dois numeros")
        return
    }
    let resultado

    if(operador === "+"){
       resultado = valores[0] + valores[1]
    }
    else if(operador === "-"){
        resultado = valores[0] - valores[1]
    }
    else if(operador === "*"){
        resultado = valores[0] * valores[1]
    }
    else if (operador === "/"){
         if(valores[1] === 0) {
            alert('Não pode dividir por zero')
            return
         }
    
        resultado = valores[0] / valores[1]
    }






    document.getElementById("res").innerText = resultado
    valores = []
        
}




    function limpar(){
        valores.length = 0
        document.getElementById('res').innerText = "0"
    }
