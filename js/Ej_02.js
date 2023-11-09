// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// carga de ciudades
const ciudades = [];

while (true) {
    const ciudad = prompt("Ingrese el nombre de una ciudad (o presione Cancelar para finalizar):");

    // Verificar si el usuario ingresó una ciudad o canceló
    if (ciudad === null) {
        // El usuario ha cancelado, salir del bucle
        break;
    } else {
        // Agregar la ciudad al arreglo
        ciudades.push(ciudad);
    }
}

// Muestro las ciudades
document.write('<h2>Lista de ciudades</h2>');
document.write('<ul>');
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write('</ul>');

// Mostrar la longitud del arreglo
let longitud = ciudades.length;
document.write("<p>La longitud del arreglo es de: " + longitud + "</p>");

// Mostrar las posiciones
document.write("<p>En la primera posición se encuentra: " + ciudades[0] + "</p>");
document.write("<p>En la tercera posición se encuentra: " + ciudades[2] + "</p>");
document.write("<p>En la última posición se encuentra: " + ciudades[longitud - 1] + "</p>");

// Agregar en la última posición
let nuevo = "París";
ciudades.push(nuevo);
document.write("<p>Arreglo después de agregar un elemento: " + ciudades + "</p>");

// Segunda posición
document.write("<p>En la segunda posición se encuentra: " + ciudades[1] + "</p>");

// Cambiar en la segunda posición
let segundo = "Barcelona";
ciudades[1] = segundo;
document.write("<p>Arreglo después de la sustitución: " + ciudades + "</p>");
