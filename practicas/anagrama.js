function sonAnagrama(palabra1, palabra2){
    if(palabra1.length !== palabra2.length){
        return false;
    }

    const palabra1Ordenada = palabra1.split('').sort().join('');
    const palabra2Ordenada = palabra2.split('').sort().join('');
    //Ordenación de las palabras: 
    //Usamos split('') para dividir la palabra en un array de caracteres, 
    //Usar split('') es como decir "divide la cadena en cada carácter individual". Por ejemplo, 
    //"amor".split('') devuelve un array de caracteres: ["a", "m", "o", "r"].
    //luego sort() para ordenarlos alfabéticamente 
    //y join('') para volver a unirlos en una cadena ordenada.
    //El método join() toma un argumento que indica cómo juntar los elementos del array. 
    // Si usas join(''), le estás diciendo que junte todos los elementos sin ningún separador 
    // (es decir, los une directamente).
    return palabra1Ordenada === palabra2Ordenada && palabra1 !== palabra2;
}
