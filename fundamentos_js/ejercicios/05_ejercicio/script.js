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
    else{
        resultado = `necesitas mejorar`
    }
  
    document.getElementById(`lista`).innerHTML = resultado; 
}