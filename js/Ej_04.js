// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function determinarParidad(numero){
    if (numero % 2 === 0 ){
        return "el reultado es par."
    }else{
        return "el resultado es impar"
    }
}

let entradausuario = parseInt(prompt("INGRESE UN NUMERO"));

if (!isNaN(entradausuario)){
    let resultado = determinarParidad(entradausuario)
    alert(resultado)
}else{
    alert("Por favor, ingrese un numero valido")
}