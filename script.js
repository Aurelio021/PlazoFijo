function textoNoVacio() {
  let bandera;
  do {
    bandera = true;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let monto = document.getElementById("txtMonto").value;
    let dias = document.getElementById("txtDias").value;

    if (nombre === "") {
      document.getElementById("txtNombre").value = "Error: Vacio";
    }
    if (apellido === "") {
      document.getElementById("txtApellido").value = "Error: Vacio";
    }
    if (monto === "") {
      document.getElementById("txtMonto").value = "Error: Vacio";
    } else if (isNaN(monto)) {
      document.getElementById("txtMonto").value = "Error: Solo Numeros";
    } else if (Number(monto) <= 999) {
      document.getElementById("txtMonto").value = "Error: Monto inválido";
    }
    if (dias === "") {
      document.getElementById("txtDias").value = "Error: Vacio";
    } else if (isNaN(dias)) {
      document.getElementById("txtDias").value = "Error: Solo Numeros";
    } else if (Number(dias) <= 29) {
      document.getElementById("txtDias").value = "Error: Poco dias";
    }
    bandera = false;

  } while (bandera)
  calculoFinal();
}

function borrarInput(elemento) {
  if (
    elemento.value === "Error: Vacio" ||
    elemento.value === "Error: Monto inválido" ||
    elemento.value === "Error: Solo Numeros" ||
    elemento.value === "Error: Poco dias"
  ) {
    elemento.value = "";
  }
}

function calculoFinal() {
  let dias = parseInt(document.getElementById("txtDias").value);
  let montoInicial = parseFloat(document.getElementById("txtMonto").value);
  let porcentaje;

  if (dias >= 30 && dias <= 60) {
    porcentaje = 40;
  } else if (dias >= 61 && dias <= 120) {
    porcentaje = 45;
  } else if (dias >= 121 && dias <= 360) {
    porcentaje = 50;
  } else if (dias >= 361) {
    porcentaje = 65;
  }

  let ganancia = (montoInicial + montoInicial * (dias / 360) * (porcentaje / 100)).toFixed(2);

  document.getElementById("salida").textContent = ganancia;
  document.getElementById("frame2").classList.remove("hidden");
}

function inversionCuadro() {
  document.getElementById("frame3").classList.remove("hidden");
  let montoInicial = document.getElementById("txtMonto").value;
  let gananciaP1 = parseFloat(document.getElementById("salida").textContent);
  document.getElementById("celda2-1").textContent = montoInicial;
  document.getElementById("celda3-1").textContent = gananciaP1;
  document.getElementById("celda2-2").textContent = gananciaP1;
  calculoNuevo(gananciaP1)
  document.getElementById("celda3-2").textContent = resultadoNuevo;
  document.getElementById("celda2-3").textContent = resultadoNuevo;
  gananciaP1=parseFloat(resultadoNuevo);
  calculoNuevo(gananciaP1)
  document.getElementById("celda3-3").textContent = resultadoNuevo;
  document.getElementById("celda2-4").textContent = resultadoNuevo;
  gananciaP1=parseFloat(resultadoNuevo);
  calculoNuevo(gananciaP1)
  document.getElementById("celda3-4").textContent = resultadoNuevo;
}

function calculoNuevo(gananciaP1){
let dias = parseInt(document.getElementById("txtDias").value);
let porcentaje;

if (dias >= 30 && dias <= 60) {
  porcentaje = 40;
} else if (dias >= 61 && dias <= 120) {
  porcentaje = 45;
} else if (dias >= 121 && dias <= 360) {
  porcentaje = 50;
} else if (dias >= 361) {
  porcentaje = 65;
}

resultadoNuevo=(gananciaP1 + gananciaP1 * (dias / 360) * (porcentaje / 100)).toFixed(2);
return resultadoNuevo;
}