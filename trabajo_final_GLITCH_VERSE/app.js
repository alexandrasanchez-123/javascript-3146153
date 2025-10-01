let capituloPrincipal = document.getElementById("capitulo-principal");
let grid = document.getElementById("capitulos-grid");

grid.innerHTML = "";

// Generar tarjetas de capítulos
for (let i = 0; i < comic.capitulos.length; i++) {
  let cap = comic.capitulos[i];

  let tarjeta = document.createElement("div");
  tarjeta.className = "capitulo";

  tarjeta.innerHTML =
    "<img src='" + cap.imgPortada + "' alt='Capítulo " + cap.id + "'>" +
    "<h3>Capítulo " + cap.id + ": " + cap.nombreCap + "</h3>" +
    "<p>" + cap.descripcion + "</p>";

  // Cuando doy clic en la tarjeta, muestra la descripción en el contenedor principal
  tarjeta.onclick = function () {
    capituloPrincipal.innerHTML =
      "<h3>Capítulo " + cap.id + ": " + cap.nombreCap + "</h3>" +
      "<img src='" + cap.imgPortada + "' alt='" + cap.nombreCap + "'>" +
      "<p>" + cap.descripcion + "</p>" +
      "<button onclick=\"reproducirVideo(" + cap.id + ")\">▶ Reproducir</button>";
  };

  grid.appendChild(tarjeta);
}

// Mostrar el primer capítulo por defecto
if (comic.capitulos.length > 0) {
  let primerCap = comic.capitulos[0];
  capituloPrincipal.innerHTML =
    "<h3>Capítulo " + primerCap.id + ": " + primerCap.nombreCap + "</h3>" +
    "<img src='" + primerCap.imgPortada + "' alt='" + primerCap.nombreCap + "'>" +
    "<p>" + primerCap.descripcion + "</p>" +
    "<button onclick=\"reproducirVideo(" + primerCap.id + ")\">▶ Reproducir</button>";
}



// 🔹 Nueva función: redirige a video.html con el id del capítulo
function reproducirVideo(idCapitulo) {
  window.location.href = `video.html?id=${idCapitulo}`;
}