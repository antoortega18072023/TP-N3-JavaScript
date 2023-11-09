// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// Inicializar un array para contar las apariciones de cada suma
let conteoSumas = new Array(11).fill(0);

// Realizar 50 lanzamientos
for (let i = 0; i < 50; i++) {
    // Lanzar dos dados (números aleatorios entre 1 y 6)
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcular la suma de los resultados
    var suma = dado1 + dado2;

    // Incrementar el conteo para esa suma en el array
    conteoSumas[suma - 2]++;
}

// Mostrar los resultados
console.log("Resultados después de 50 lanzamientos:");

for (let i = 2; i <= 12; i++) {
    console.log(`Suma ${i}: ${conteoSumas[i - 2]} veces`);
}
