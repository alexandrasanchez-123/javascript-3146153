
/* document.addEventListener("DOMContentLoaded", () => {
    const sonic = document.querySelector(".sonic");
    const monedas = document.querySelectorAll(".coin");
    const estrella = document.querySelector(".estrella");

    const contadorMonedas = document.getElementById("contador-monedas");
    const contadorEstrellas = document.getElementById("contador-estrellas");

    let totalMonedas = 0;
    let totalEstrellas = 0;

    function detectarColision(rect1, rect2) {
        return !(
            rect1.top > rect2.bottom ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right ||
            rect1.right < rect2.left
        );
    }

    function actualizar() {
        const rectSonic = sonic.getBoundingClientRect();

       
        monedas.forEach((moneda) => {
            if (!moneda.classList.contains("recogida")) {
                const rectMoneda = moneda.getBoundingClientRect();
                if (detectarColision(rectSonic, rectMoneda)) {
                    moneda.style.display = "none";
                    moneda.classList.add("recogida");
                    totalMonedas++;
                    contadorMonedas.textContent = totalMonedas;
                }
            }
        });

        // Detectar estrella
        if (!estrella.classList.contains("recogida")) {
            const rectEstrella = estrella.getBoundingClientRect();
            if (detectarColision(rectSonic, rectEstrella)) {
                estrella.style.display = "none";
                estrella.classList.add("recogida");
                totalEstrellas++;
                contadorEstrellas.textContent = totalEstrellas;
            }
        }

        requestAnimationFrame(actualizar);
    }

    actualizar();
});

const estrella = document.querySelectorAll(".poin");
const contadorEstrellas = document.querySelector("#contador-estrellas");
let totalEstrellas = 0;

estrella.forEach(function(estrella) {
    estrella.addEventListener("click", function() {
        estrella.classList.add("saltar");
        totalEstrellas++;
        contadorEstrellas.textContent = totalEstrellas;
    });
}); */


document.addEventListener("DOMContentLoaded", function () {
    var sonic = document.querySelector(".sonic");
    var monedas = document.querySelectorAll(".coin");
    var estrella = document.querySelector(".estrella");
    var cofre = document.querySelector(".cofre");

    var contadorMonedas = document.getElementById("contador-monedas");
    var contadorEstrellas = document.getElementById("contador-estrellas");

    var totalMonedas = 0;
    var totalEstrellas = 0;

    var sonidoMoneda = document.getElementById("audio-2");
    var sonidoSalto = document.getElementById("audio-1");

    // Usar audio en el DOM para música de fondo
    var musicaFondo = document.getElementById("musica-fondo");

    // Botón play/stop
    var botonMusica = document.getElementById("play-stop-img2");

    // Inicializa estado del botón
    botonMusica.textContent = "Play";

    botonMusica.addEventListener("click", function () {
        if (musicaFondo.paused) {
            musicaFondo.play();
            botonMusica.textContent = "Stop";
        } else {
            musicaFondo.pause();
            botonMusica.textContent = "Play";
        }
    });

    // Opcional: para que la música arranque al primer click en cualquier lugar (por políticas de autoplay)
    let musicaIniciada = false;
    document.body.addEventListener("click", function () {
        if (!musicaIniciada) {
            musicaFondo.play();
            botonMusica.textContent = "Stop";
            musicaIniciada = true;
        }
    });

    // Resto del código igual...
    function detectarColision(hola1, hola2) {
        return !(
            hola1.top > hola2.bottom ||
            hola1.bottom < hola2.top ||
            hola1.left > hola2.right ||
            hola1.right < hola2.left
        );
    }

    monedas.forEach(function (moneda) {
        moneda.addEventListener("click", function () {
            if (!moneda.classList.contains("recogida")) {
                moneda.style.display = "none";
                moneda.classList.add("recogida");
                totalMonedas++;
                contadorMonedas.textContent = totalMonedas;

                sonidoMoneda.currentTime = 0;
                sonidoMoneda.play();
            }
        });
    });

    estrella.addEventListener("click", function () {
        if (!estrella.classList.contains("recogida")) {
            estrella.style.display = "none";
            estrella.classList.add("recogida");
            totalEstrellas++;
            contadorEstrellas.textContent = totalEstrellas;
        }
    });

    
    cofre.addEventListener("click", function () {
    cofre.classList.add("saltar");

    sonidoSalto.currentTime = 0;
    sonidoSalto.play();

    setTimeout(function () {
        cofre.classList.remove("saltar");
    }, 500);
});

    sonic.addEventListener("click", function () {
        sonic.classList.add("saltar");
        sonidoSalto.currentTime = 0;
        sonidoSalto.play();

        setTimeout(function () {
            sonic.classList.remove("saltar");
        }, 600);
    });

    function actualizar() {
        var rectSonic = sonic.getBoundingClientRect();

        monedas.forEach(function (moneda) {
            if (!moneda.classList.contains("recogida")) {
                var rectMoneda = moneda.getBoundingClientRect();
                if (detectarColision(rectSonic, rectMoneda)) {
                    moneda.style.display = "none";
                    moneda.classList.add("recogida");
                    totalMonedas++;
                    contadorMonedas.textContent = totalMonedas;

                    sonidoMoneda.currentTime = 0;
                    sonidoMoneda.play();
                }
            }
        });

        if (!estrella.classList.contains("recogida")) {
            var rectEstrella = estrella.getBoundingClientRect();
            if (detectarColision(rectSonic, rectEstrella)) {
                estrella.style.display = "none";
                estrella.classList.add("recogida");
                totalEstrellas++;
                contadorEstrellas.textContent = totalEstrellas;
            }
        }

        requestAnimationFrame(actualizar);
    }

    actualizar();
});