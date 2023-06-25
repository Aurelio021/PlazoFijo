function textoNoVacio(){
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let monto = document.getElementById("txtMonto").value;

    if (nombre === ""){
        document.getElementById("txtNombre").value = "Error: Vacio";
    }
    if (apellido === ""){
        document.getElementById("txtApellido").value = "Error: Vacio";
    }
    if (monto === ""){
        document.getElementById("txtMonto").value = "Error: Vacio";
    }
}
function borrarInput(elemento){
    if(elemento.value === "Error: Vacio"){
        elemento.value="";
    }
}