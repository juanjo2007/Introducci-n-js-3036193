//alert("Hello world")
// =================================
// CONVENCION NOMBRES PARA CODIFICAR
// =================================

// UpperCamelCase => En JS se usa para nombrar las clases
// lowerCamelCase => En JS se usa para nombrar las variables
// SCREAMING_SNAKE_CASE => En JS se usa para nombrar las constantes

//snake_case => En JS generalmente no se usa
//esta convencion es muy usada en el lenguaje Python

// caja-de-kebac => Se usa para nombrar las imagenes, los repositorios

//Caja-De-Tren => 

// Variables
// Ya no se declara una variable con var
// En JS no es obligatorio terminar una sentencia con punto y coma (;)
// En JS no es obligatorio indicar el tipo de variable

var product = "sensor-1";

// No se puede iniciar una variable con - el medio (guion al medio)
//var -sensor = "sensor-2";

// No se puede inicar una variable con número
//var 1sensor = "sensor-3";

//Si es permitido iniciar una variable con guion al piso (_)
var _sensor = "sensor-4"

// Crear una variable con las tres formas

var sensor = "Sensor de lluvia";
var sensor = "Sensor de temperatura";
var sensor = "Sensor de presión";

console.log(sensor);

let userName = "Edwar";
//let userName = "Patricia";
console.log(userName);

//Ejemplo const
//No puedo cambiarle el valor a una variable constante
const maxSize = 1024;
//maxSize = 124568;

//Otro ejemplo con var
//console.log(userName2);
//var userName2 = "Jacobo";
let userName2 = "Jacobo";