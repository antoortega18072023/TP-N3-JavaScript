// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const ciudades = []

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

document.write('<h2>Lista de ciudades</h2>')
document.write('<ul>')
for (let i=0; i<ciudades.length; i++){
    document.write(`<li> ${ciudades[i]} </li>`)
}
document.write('</ul>')
