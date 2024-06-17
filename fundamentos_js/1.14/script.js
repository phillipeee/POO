function activado(elemento){
    console.log("elemento activado", elemento);
    if(elemento.textContent === 'Desactivado'){
        elemento.style.backgroundColor = 'green';
        elemento.textContent = 'Activado';
    }else{
        elemento.style.backgroundColor = 'red';
        elemento.textContent = 'Desactivado';
    }

}
