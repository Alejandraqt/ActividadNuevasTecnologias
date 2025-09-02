
let intervalo; // variable reloj

function actualizarReloj() {
  let ahora = new Date();
  let horas = ahora.getHours().toString().padStart(2, "0");
  let minutos = ahora.getMinutes().toString().padStart(2, "0");
  let segundos = ahora.getSeconds().toString().padStart(2, "0");

  document.getElementById("reloj").innerText =
    "Hora actual: " + horas + ":" + minutos + ":" + segundos;
}

function iniciarReloj() {
  if (!intervalo) { // Para evitar intervalos
    actualizarReloj(); 
    intervalo = setInterval(actualizarReloj, 1000);
  }
}

document.getElementById("mostrarInfo").addEventListener("click", function() {
  const tabla = document.getElementById("articuloInfoK");
  
  if (tabla.style.display === "none" || tabla.style.display === "") {
    tabla.style.display = "block";
    this.textContent = "Ocultar información";
  } else {
    tabla.style.display = "none";
    this.textContent = "Ver información";
  }
});


window.onscroll = function() {
  mostrarBoton();
};

function mostrarBoton() {
  let boton = document.getElementById("btnArriba");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
}

function irArriba() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}