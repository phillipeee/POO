console.log("vinculado correctamente...");
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    alert("esto es una alerta");
    // Tu código aquí
    let ahora = 2024;
    let fecha_nac = 2006;
    let edad = ahora - fecha_nac;
    alert("la edad actual es: " + edad);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = 19;
    let var2 = var1;
    alert("el valor de var2 es: " + var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2'y'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    // Tu código aquí
    let num1 = 10;
    let num2 = 5;
    let num3 = 3;
    let suma = num1 + num2 +num3;
    let resta = num3 - num1;
    let multiplicacion = num2 * num3;
    let division = num1/120;
    alert("lasuma de num1, num2 y num3 es: " + suma +
    "\nla resta de num1 y num3 es: " + resta +
    "\nla multiplicacion de num2 y num3 es: " + multiplicacion +
    "\nla division de num1/120 es: " + division);
    }
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje. (.lenght)
    function manipularCadenas() {
    // Tu código aquí
    let direccion = "la pintana";
    let n_casa = "2035";
    let mensaje = direccion + " " + n_casa;
    alert("longitud del mensaje:" + mensaje.length);
    alert("antepenultimocaracter" + mensaje[mensaje.length - 3]);
    }