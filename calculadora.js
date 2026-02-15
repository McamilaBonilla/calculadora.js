// Versión 1.1 - Proyecto ADSO

console.log("console.log("Bienvenido a la calculadora básica versión 1.1");
);

let opcion = prompt("Elige una opción:\n1 para suma\n2 para resta\n3 para multiplicación\n4 para división");

let numero1 = parseFloat(prompt("Ingresa el primer número"));
let numero2 = parseFloat(prompt("Ingresa el segundo número"));

let resultado;

if (opcion == "1") {
    resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
}
else if (opcion == "2") {
    resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
}
else if (opcion == "3") {
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
}
else if (opcion == "4") {
    if (numero2 != 0) {
        resultado = numero1 / numero2;
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("No se puede dividir entre cero");
    }
}
else {
    alert("Opción no válida");
}
