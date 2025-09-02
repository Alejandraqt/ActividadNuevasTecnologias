function mostrarAlerta1() {
    alert('Más información');
}
function cambiarTema(articuloId) {
    const cont = document.getElementById(articuloId);
    if (!cont) return;
    cont.classList.toggle('modo-oscuro');
}
function cambiarTamaño() {
    const texto = document.getElementById("textoCambiar");
    texto.classList.toggle("aumentado");
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