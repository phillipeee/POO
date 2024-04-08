function identificarmayoredad()
{
    let resultado = "";
    //identificar  si es mayor de edad
    let edad = prompt("por favor, ingrese su edad."); //prompt captura un valor ingresado por el usuario(pide que agregues un valor atravez de una alerta)

    if (edad >=18){
        resultado = `es mayor de edad - tiene: <h2>${edad}</h2>`
    } else {
        resultado = `es menor de edad - tiene: <h2>${edad}</h2>`
    }
    document.getElementById(`lista`).innerHTML = resultado; //getElementById es para seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
                                                            //tecnicamente transforma el ejercicio en html
    
}