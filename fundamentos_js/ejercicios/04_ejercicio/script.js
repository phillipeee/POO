function positivoNegativo()

{
    let resultado = "";
    let numero = prompt("por favor, ingrese un numero ");

    if (numero > 0){
        resultado = `el numero es positivo`
    } 
    else if(numero < 0){
        resultado = `el numero es negativo`
    }
    else{
        resultado = `el numero es igual a cero`
    }
  
    document.getElementById(`lista`).innerHTML = resultado; //getElementById es para seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
                                                            //tecnicamente transforma el ejercicio en html
    
}