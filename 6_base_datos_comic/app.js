const tituloComic = document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".descripcion-comic");
const imgComic = document.querySelector(".img-comic");
const grid = document.querySelector(".grid");


/* mostrar info en la base de datos de la pagina */
tituloComic.textContent = comic.nombreComic;
descripcionComic.textContent = comic.descripcion;


/* imprimir info del cap */
comic.capitulos.forEach(cap => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <p>${cap.nombreCap}</p> 
    
    <img src="${cap.imgPortada}" width="190" alt="">
    <p>${cap.descripcion}</p> ` 
    

             grid.appendChild(div);
});