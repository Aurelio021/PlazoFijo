function textoNoVacio(){
    do{
        console.log()
    let bandera = true
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let monto = document.getElementById("txtMonto").value;
    let dias = document.getElementById("txtDias").value;

    if (nombre === ""){
        document.getElementById("txtNombre").value = "Error: Vacio";
    }
    if (apellido === ""){
        document.getElementById("txtApellido").value = "Error: Vacio";
    }
    if (monto === ""){
        document.getElementById("txtMonto").value = "Error: Vacio";
    } else if (isNaN(monto)){
        document.getElementById("txtMonto").value = "Error: Solo Numeros";
    } else if(Number(monto) <= 999){
        document.getElementById("txtMonto").value = "Error: Monto inválido";
    }
    if (dias === ""){
        document.getElementById("txtDias").value = "Error: Vacio";
    } else if (isNaN(dias)){
        document.getElementById("txtDias").value = "Error: Solo Numeros";
    } else if(Number(dias) <= 29){
        document.getElementById("txtDias").value = "Error: Poco dias";
    }
    bandera = false;
    }while(bandera)

    calculoFinal();
}

function borrarInput(elemento){
    if(elemento.value === "Error: Vacio"|| elemento.value === "Error: Monto inválido"||elemento.value === "Error: Solo Numeros"||elemento.value === "Error: Poco dias")
    {
        elemento.value="";
    }
}

function calculoFinal(){
    let montoInicial = parseFloat(document.getElementById("txtMonto").value);
    let dias = parseInt(document.getElementById("txtDias").value);
    let porcentaje;

    if(dias <= 30){
        porcentaje = 40;
    } else if(dias <= 61){
        porcentaje = 45;
    } else if(dias <= 121){
        porcentaje = 50;
    } else if(dias < 360){
        porcentaje = 65;
    }

    let ganancia = (montoInicial * (dias / 365) * (porcentaje / 100)).toFixed(2);

    document.getElementById("salida").textContent="hola"+ ganancia;
    document.getElementById("frame2").classList.remove("hidden");
}