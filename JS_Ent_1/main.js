// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function esPar(num) {
//   if (num % 2 === 0) {
//     return `El numero ${num} es par`;
//   } else {
//     return `El numero ${num} es impar`;
//   }
// }

// console.log(esPar(7));

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

//  function valor(a, b) {
//    if (a > b) {
//      return `${a} es mayor que ${b}`;
//    } else if (a < b) {
//      return `${b} es mayor que ${a}`;
//    } else {
//      return `Ambos números son iguales`;
//    }
//  }

// console.log(valor(215, 500));

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiplo(num) {
//   if (num % 5 === 0) {
//     return `${num} Es multiplo de 5`;
//   } else {
//     return `${num} No es multiplo de 5`;
//   }
// }
// console.log(multiplo(55));

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function counter(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(`El numero que estamos iterando es el ${i}`);
//   }
// }

// counter(10);

// for (let i = 1; i <= 10; i++) {
//   console.log(`El numero que estamos iterando es el ${i}`);
// }

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function texto(a, b) {
//   for (let i = 0; i < b; i++) {
//     console.log(`${a}`);
//   }
// }

// texto("hola", 5);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// let Datos = ["Peras", "Naranjas", "Bananas", "Kiwi"];

// function contenido(valor, indice) {
//   console.log(`${valor}`);
// }

// Datos.forEach(contenido);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function salta(num) {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}
salta(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
