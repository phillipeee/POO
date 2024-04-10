function positivoNegativo()

{
    let resultado = "";
    let numero = prompt("por favor, ingrese un numero ");

    if (numero > 0){
        resultado = `el numero es positivo`
    } 
    else if (numero < 0){
        resultado = `el numero es negativo`
    }
    else if(numero == 0){
        resultado = `el numero es igual a cero`
    }
    else{
        resultado = `ingrese un valor valido`
    }    
    document.getElementById(`lista`).innerHTML = resultado; 
    
}