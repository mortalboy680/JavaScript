const caracteresArea = document.getElementById('caracteresArea');
const contadorArea = document.getElementById('contadorArea');

function actualizarContador() {
    const cantidadCaracteres = caracteresArea.value.length;
    contadorArea.textContent = `Caracteres: ${cantidadCaracteres}`; // Corregido: "cantidadCaracteres"
}

// Agregar evento para detectar cambios en el textarea
caracteresArea.addEventListener('input', actualizarContador);
