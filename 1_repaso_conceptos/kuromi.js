/* var imagen = document.getElementById("imagen");

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
    imagen.style.transform = "scale(1) rotate(8deg)";
    desactivarTodos();
    btn3.classList.add("activo");
}); */

/* 1.captura de variable */
const pantalla = document.querySelector("#imagen");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

/* 2. Funciones */
function blancoynegro() {
    console.log("Imagen modificada");
    pantalla.style.filter = "grayscale(100%)";
   /*  btn1.style.color = "white";
    btn1.style.backgroundColor = "blue";
    btn1.style.height = "200px";
    btn1.style.borderRadius = "50%"; */ 
}
function desenfoque() {
    console.log("Imagen modificada");
    pantalla.style.filter = "blur(4px)";
}
function zoom() {
    console.log("Imagen modificada");
    pantalla.style.transform = "scale(1) rotate(8deg)";
}
/* 3. Eventos */
btn1.addEventListener("click", blancoynegro)
btn2.addEventListener("click", desenfoque);
btn3.addEventListener("click", zoom);