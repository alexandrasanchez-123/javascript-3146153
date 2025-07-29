var imagen = document.getElementById("imagen");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


var botones = [btn1, btn2, btn3];


function resetearImagen() {
    imagen.style.filter = "none";
    imagen.style.transform = "none";
}

function desactivarTodos() {
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("activo");
    }
}


btn1.addEventListener("click", function() {
    resetearImagen();
    imagen.style.filter = "grayscale(100%)";
    desactivarTodos();
    btn1.classList.add("activo");
});

btn2.addEventListener("click", function() {
    resetearImagen();
    imagen.style.filter = "blur(4px)";
    desactivarTodos();
    btn2.classList.add("activo");
});


btn3.addEventListener("click", function() {
    resetearImagen();
    imagen.style.transform = "scale(1.3) rotate(8deg)";
    desactivarTodos();
    btn3.classList.add("activo");
});