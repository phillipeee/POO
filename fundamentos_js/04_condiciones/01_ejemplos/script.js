function identificarmayoredad(){
    //identificar  si es mayor de edad
    let edad = prompt("por favor, ingrese su edad.");

    if (edad >=18){
        alert(`es mayor de edad - tiene: ${edad}`);
    } else {
        alert(`es menor de edad - tiene: ${edad}`);
    }
    
}