function calcularTemperatura()
{
    let resultado = "";
    //identificar  si es mayor
    let temperatura = prompt("por favor, ingrese la temperatura."); 
    if (temperatura < 0){
        resultado = `hace frio: <h2>${temperatura}</h2>`
    }else if (temperatura >= 0 & temperatura <= 25){
        resultado = `la temperatura es agradable: <h2>${temperatura}</h2>`
    }
    else {
        resultado = `hace calor:`
    }
    document.getElementById(`lista`).innerHTML = resultado; //getElementById es para seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
                                                            //tecnicamente transforma el ejercicio en html
    
}