// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tabla(x){
    document.write('<h2>TABLA DE MULTIPLICAR</h2>');
    document.write('<ul>');
    for (let i=1;i<=10;i++){
        document.write(`<li>${i*x}</li>`)
    }
    document.write('</ul>');
}

let num = parseInt(prompt("ingrese un numero"));

let resultado = tabla(num)

