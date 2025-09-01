
function ordenarAutores() {
  const lista = document.querySelector("#articuloAInfo td ul");
  const items = Array.from(lista.querySelectorAll("li"));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));

  lista.innerHTML = "";
  items.forEach(item => lista.appendChild(item));
}

function ocultarResumen() {
  let oculto = false;
  const resumen = document.getElementById("resumenA");

  if (!oculto) {
    resumen.textContent = "El resumen fue ocultado.";
    oculto = true;
  }

}

function copiarBusqueda() {
  const cita = "(TITLE-ABS-KEY (virtual reality) AND TITLE-ABS-KEY (health)) AND (LIMIT-TO (DOCTYPE,'ar'))";
  navigator.clipboard.writeText(cita);
  alert("Busqueda copiada al portapapeles");
}