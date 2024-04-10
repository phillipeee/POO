function puntuacion()

{
    let resultado = "";
    let puntuacion = prompt("por favor, ingrese su puntuacion");

    if (puntuacion >= 90){
        resultado = `excelente`
    } 
    else if(puntuacion >= 70 & puntuacion <= 89){
        resultado = `buen trabajo`
    }
    else if(puntuacion <70){
        resultado = `necesitas mejorar`
    }
    else{
        resultado = `ingrese un valor valido`
    }
  
    document.getElementById(`lista`).innerHTML = resultado; 
}