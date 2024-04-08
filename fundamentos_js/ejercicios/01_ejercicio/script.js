function identificarmayor()
{
    let resultado = "";
    //identificar  si es mayor
    let num1 = prompt("por favor, ingrese un numero."); //prompt captura un valor ingresado por el usuario(pide que agregues un valor atravez de una alerta)
    let num2 = prompt("por favor, ingrese otro numero.");
    if (num2 > num1){
        resultado = `mayor: <h2>${num2}</h2>`
    }  else if (num1 > num2){
        resultado = `mayor: <h2>${num1}</h2>`
    }
    document.getElementById(`lista`).innerHTML = resultado; //getElementById es para seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
                                                            //tecnicamente transforma el ejercicio en html
    
}