function traerTablas(){
    let num = parseInt(document.getElementById("inputText").value);
    let resultado =`la tabla de ${num} es:`
    for(let i = 1; i <= 10; i++){
       resultado +=  `${i} X ${num} = ${i*num}`;
    }
    document.getElementById("lista").innerHTML =  resultado;
 }