//ejercicios creacion de variables

//Una variable global de tipo var para mostrar el alcance global de la variable
var global ="global";
//variable local
let local ="local";
//variable constante
const constante ="constante";

console.log("variables: global" + global + " - local "+ local + " - constante: " + constante);

let num =4; //numero entero
let decimal =4.23458; //numero decimal
let string ="texto"; //cadena de texto
let bool = true; //booleano
let array =["perro",20, "gato",50,]; //arreglo
let objeto ={  //tipo objeto
                edad:20, 
                nombre: "Ian",
                telefono: "+56914243698",
                direccion: "dende tu mami 1234"
            };
let indefinida; //indefinida
let nula = null; //tipo nula

function sumar(){ //funcion sin parametros
    return 20+50;
};

console.log("variables:\nEntero: " + num +"\nDecimal: " + decimal +"\nString: " + string + "\nBooleano: " + bool + "\nArreglo: " + array + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinida: " + indefinida + "\nNula: " + nula + "\nResultado de funcion: " + sumar());
console.log( sumar() );
