function nombreusuario()

{
    let resultado = "";
    //identificar  si es mayor
    let usuarioIngresado = prompt("por favor, ingrese su nombre de usuario.");
    let contraseñaIngresada = prompt("por favor, ingrese su contraseña.");
    let nombreUsuario=("usuario123");
    let contraseña=("secreto");

    if (usuarioIngresado==nombreUsuario&contraseñaIngresada==contraseña){
        resultado = `acceso concedido.`
    }  else{
        resultado = `acceso denegado.`
    }
    document.getElementById(`lista`).innerHTML = resultado; 
    
}