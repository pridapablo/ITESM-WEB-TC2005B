// 1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function findFirstNonRepeatedChar(str) {
  for (let el = 0; el < str.length; el++) {
    const element = str[el];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const element2 = str[i];
      if (element === element2) {
        count++;
      }
    }
    if (count === 1) {
      return element;
    }
  }
}

// 2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

// 3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function capitalize(str) {}

// 5. Escribe una función que calcule el máximo común divisor de dos números.
function gcd(a, b) {}

// 6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function hackerSpeak(str) {}

// 7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
function factorize(num) {}

// 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function removeDuplicates(arr) {}

// 9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function shortestString(arr) {}

// 10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
function isPalindrome(str) {}

// 11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function alphabetize(params) {}

// 12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function centralTendencies(params) {}

// 13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function mostFrequent(params) {}

// 14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function isPowerOfTwo(params) {}

// 15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function sortDescending(params) {}

// Ejecución de las funciones
console.log(
  "1. Función que encuentra el primer carácter de un cadena de texto que no se repite"
);
console.log(findFirstNonRepeatedChar("abacddbec"));
console.log(
  "2. Escriba una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números."
);
console.log(bubbleSort([4, 8, 2, 5, 6, 4, 2, 6, 1]));
console.log(
  "3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'."
);
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(
  "4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula."
);
console.log(capitalize("abacddbec"));
console.log(
  "5. Escribe una función que calcule el máximo común divisor de dos números."
);
console.log(gcd(12, 18));
console.log(
  "6. Crea una función que cambie una cadena de texto a 'Hacker Speak'."
);
console.log(hackerSpeak("Hola, soy Pablo"));
console.log(
  "7. Escribe una función que reciba un número, y regrese una lista con todos sus factores."
);
console.log(factorize(12));
console.log(
  "8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan."
);
console.log(removeDuplicates([1, 0, 1, 1, 0, 0]));
console.log(
  "9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta."
);
console.log(shortestString(["Hola", "soy", "Pablo"]));
console.log(
  "10. Escribe una función que revise si una cadena de texto es un palíndromo o no."
);
console.log(isPalindrome("anitalavalatina"));
console.log(
  "11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético."
);
console.log(alphabetize(["Hola", "soy", "Pablo"]));
console.log(
  "12. Escribe una función que tome una lista de números y devuelva la mediana y la moda."
);
console.log(centralTendencies([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(
  "13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente."
);
console.log(mostFrequent(["Hola", "soy", "Pablo"]));
console.log(
  "14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario."
);
console.log(isPowerOfTwo(8));
console.log(
  "15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente."
);
console.log(sortDescending([1, 2, 3, 4, 5, 6, 7, 8, 9]));
