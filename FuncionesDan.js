function mostrarMas() {
  const extra = document.getElementById("masInfo");
  if (extra.style.display === "none") {
    extra.style.display = "block";   // muestra el contenido
  } else {
    extra.style.display = "none";    // lo oculta de nuevo
  }
}

function cambiarTema(articuloId) {
    const cont = document.getElementById(articuloId);
    if (!cont) return;
    cont.classList.toggle('modo-oscuro');
}
function irAPaginaPrincipal() {
    window.location.href = "index.html";
}
function cambiarFondo(articuloId) {
    const articulo = document.getElementById(articuloId);
    if (!articulo) return;
    articulo.style.backgroundColor =
        articulo.style.backgroundColor === "red" ? "white" : "red";
}
function toggleResumen() {
  const resumen = document.getElementById("resumen");
  if (!resumen) return;           
  resumen.hidden = !resumen.hidden; 
}