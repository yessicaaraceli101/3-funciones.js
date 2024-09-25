// 3-ejercicio.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
function despedir() {
    console.log("Adiós");
}

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
function multiplicarPorDos(numero) {
    return numero * 2;
}

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
function esMayorDeEdad(edad) {
    return edad > 18;
}

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
function multiplicar(a, b) {
    return a * b;
}

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`;
}

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(a, b) {
    return a - b;
}

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
function dividir(a, b) {
    return a / b;
}

// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicar`.
const multiplicarExpr = function(a, b) {
    return a * b;
};

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
const esPar = function(numero) {
    return numero % 2 === 0;
};

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada `multiplicarFlecha`.
const multiplicarFlecha = (a, b) => {
    return a * b;
};

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
const saludarFlecha = nombre => `Hola ${nombre}`;

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => Math.PI * Math.pow(radio, 2);

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva.
function suma(n) {
    if (n <= 1) {
        return n; // Caso base
    }
    return n + suma(n - 1); // Llamada recursiva
}

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
function fibonacci(n) {
    if (n <= 1) {
        return n; // Caso base
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Llamada recursiva
}

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número.
function factorial(n) {
    if (n <= 1) {
        return 1; // Caso base
    }
    return n * factorial(n - 1); // Llamada recursiva
}

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente.
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1; // Caso base
    }
    return base * potencia(base, exponente - 1); // Llamada recursiva
}

//Lamada a funciones.
despedir(); // Imprime "Adiós"
console.log(multiplicarPorDos(5)); // 10
console.log(esMayorDeEdad(20)); // true
console.log(multiplicar(3, 4)); // 12
console.log(saludarPersonalizado("Yessica", "Ramirez")); // "Hola, Yessica Ramirez"
console.log(calcularPotencia(2, 3)); // 8
console.log(restar(10, 5)); // 5
console.log(dividir(10, 2)); // 5
console.log(multiplicarExpr(4, 5)); // 20
console.log(saludar("Yessica")); // "Hola, Yessica"
console.log(esPar(6)); // true
console.log(multiplicarFlecha(3, 3)); // 9
console.log(saludarFlecha("Yessica")); // "Hola Yessica"
console.log(calcularArea(3)); // Área del círculo con radio 3
console.log(suma(3)); // 6
console.log(fibonacci(6)); // 8
console.log(factorial(5)); // 120
console.log(potencia(2, 3)); // 8