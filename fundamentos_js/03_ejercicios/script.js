function modificarMensaje(){
    //codigo
    const mensajeInicial = ["Hola", "a", "todos","los","estudiantes","de","programacion","de","4to","C"];
    //modificacion
    mensajeInicial.pop(); //eliminamos "C"
    mensajeInicial.shift(); //eliminamos "hola"
    mensajeInicial.shift(); //aliminamos "a"
    mensajeInicial.unshift("somos","nosotros"); //agregamos "somos" y "nosotros" 
    mensajeInicial.splice("7","1","los");//reemplazamos "de" por "los" 
    mensajeInicial.pop(); //eliminamos "4to"
    mensajeInicial.push("mejores", "del", "mundo"); //agregamos "mejores", "del", "mundo"
    const mensajeModificado = mensajeInicial
    
    //mostramos alertas
    alert("arreglarMensaje : " + '["Hola", "a", "todos","los","estudiantes","de","programacion","de","4to","C"];');
    alert("arreglo final : " + mensajeModificado.join(" "));
    
    const valoresEliminados = ["C", "hola"];
    const valoresAgregados = ["somos","nosotros", "los", "mejores", "del", "mundo"];

    alert("valores eliminados: " + valoresEliminados.join(", "));
    alert("valores agregados: " + valoresAgregados.join(", "));
    //join: sirve para combinar registros de una o más tablas en la base de datos
    }