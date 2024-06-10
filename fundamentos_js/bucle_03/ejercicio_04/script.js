//ingrese 5 numeros y verificar cual es el numero mayor. escribe un programa que utilice un bucle for para mostrar el numero mayor en una pagina html.

function numeroMayor(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i=0; i<5; i++){
        let num = parseInt(prompt("ingrese un numero para determinar si es mayor"));
        arrayNum.push(num);
        //if(numMayor > num)numMayor = num;
            numMayor = (numMayor < num) ? num: numMayor;
        
    }
    document.getElementById("lista").innerHTML = `de los numeros ingresados: ${arrayNum.join(", ")} <h2>numero mayor: ${numMayor}</h2>`;
}