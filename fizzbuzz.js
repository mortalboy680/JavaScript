const MAX_NUMEROS = 100;
let numero = [MAX_NUMEROS];

for (let i = 0; i <= MAX_NUMEROS; i++) {
    if (i % 3 === 0) {
        console.log(`Fizz ${i}`);
    } else if (i % 5 === 0) {
        console.log(`Buzz ${i}`);
    }
    if (i % 5 == 0 && i % 3 === 0) {
        console.log(`Fizzbuzz ${i}`);
    }
}

//const MAX_NUMEROS = 100;
//let numero = [MAX_NUMEROS];

//for (let i = 0; i <= MAX_NUMEROS; i++) {
//    console.log(i % 3 === 0 && i % 5 === 0 ? `Fizzbuzz ${i}` : i % 3 === 0 ? `Fizz ${i}` : i % 5 === 0 ? `Buzz ${i}` : '');
//}