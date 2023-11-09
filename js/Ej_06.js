// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function perimetrorectangulo (a,b){
    let perimetro=2*(a+b);
    return perimetro
}

let ladoA = parseFloat(prompt("ingrese el largo del rectangulo"))
let ladoB = parseFloat(prompt("ingrese el alto del rectangulo"))

let resultado = perimetrorectangulo(ladoA,ladoB)
alert("el resultado del perimetro es: " + resultado)