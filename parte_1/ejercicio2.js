let int = [];
let mayor;
const MAX_NUMEROS = 3;

for (let i = 0; i < MAX_NUMEROS; i++) {
    int[i] = parseInt(prompt('Escriba el numero'));
}

mayor = int[0];

for (let i = 1; i < MAX_NUMEROS; i++) {
    if (int[i] > mayor) {
        mayor = int[i];
    }
}

alert("El numero mas grande es: " + mayor);