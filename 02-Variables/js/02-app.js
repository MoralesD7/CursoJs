// var era la forma de crear variables en versiones anteriores de ECMASscript hoy en día las opciones se reducen a 2
// Las reglas son básicamente las mismas con let 

let producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;
let nombre = 'Omar';
// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';
nombre = 'Alejandro';
// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;
nombre =null;
console.log(producto);
console.log(nombre)
// Javascript es un lenguaje de tIpo Dinamico,
// No se especifican tipos de datos cuando
// se crea la variable


let precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después

let disponible;
disponible = true;


// Inicializar múltiples variables 
let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;
let escuela='batiz',grupo='6IV8';

console.log(categoria)
console.log(marca)
console.log(calificacion)
console.log(escuela,grupo);


// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero
let 99dias;
let dias99;

let _01;
let 01_;

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
let  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
let nombre_producto = 'Monitor 30 Pulgadas'; //underscore
let NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
let nombreproducto = 'Monitor 30 Pulgadas';