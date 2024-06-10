function primerosPares(){
    let n = parseInt(prompt("ingrese la cantidada de numeros pares que quieres encontrar"));
    let arrayPares = [];

    for (let i = 1; i <= n; i++){
        arrayPares.push(i*2);
    }
    document.getElementById("lista"). innerHTML = `los primeros numeros pares son`
}