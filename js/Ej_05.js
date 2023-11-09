// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas

function mayusominus(texto){

    if (texto === texto.toUpperCase()){
        return "la cadena esta formada por mayusculas"
    }else if(texto === texto.toLowerCase()){
        return "la cadena esta formada por minusculas"
    }else{
        return "la cadena es una mezcla de mayusculas y minusculas"
    }
}

let frase = prompt("INGRESE UNA CADENA")

let resultado = mayusominus(frase);
alert(resultado);