 const comic = {
    "nombreComic": "Matrix",
    "categoria": "apocalipsis",
    "cantidadCap": 6,
    "descripcion": "Matrix es un cómic interactivo que busca concienzar a las personas sobre el buen que se le debe dar a la tecnologia Y Nuestro proyecto nació porque logramos visualizar elmal uso que las personas cotidianamente le dan a la tecnologia y de ahí nació Matrix.",
    "personjaes": ["Emma", "AlmaMamá", "Estudiante1", "Estudiante2","Estudiante3", "Noah", "AlmaTrabajo", "Dr.Rodriguez", "dR.Martinez", "Chappie", "Encapuchado", "Emily"],
    "bg":"imagenes/fondo.jpeg",
    "capitulos": [
        {
            id:1,
            nombreCap: "Un día al revés",
            imgPortada: "./imagenes/capitulo1.jpg",
            video: "video/cap1.mp4",
            descripcion: "Emma una joven de 19 años , comienza su primer día de universidad nerviosa mientras su madre la anima con ternura en la cocina. En el campues, se siente perdida, pero pronto conces a un grupo de estudiantes que la reciben con amabilidad. Al regresar a casa, comparte emocionada su experiencia con su madre, quien la escucha orgullosa.",
            personajes: ["Emma", "AlmaMamá", "Estudiante1", "Estudiante2"]
        },
        {
            id:2,
            nombreCap: "El inicio del fin",
            imgPortada: "./imagenes/capitulo1.jpg",
            video: "video/cap1.mp4",
            descripcion: "Noah trabaja en su oficina cuando un apagón masivo deja la ciudad en caos: explosiones, aviones cayendo y gente desesperada. Junto a Alma huye entre gritos y disparos, esquivando multitudes y encapuchados armados.",
            personajes: ["Noah","AlmaTrabajo", "Encapuchado"]
        },
        {
            id:3,
            nombreCa: "La creación de Chappie",
               imgPortada: "./imagenes/capitulo1.jpg",
            video: "video/cap1.mp4",
            descripcion: "En un laboratorio, los científicos crean a CHAPPIE, un robot con inteligencia avanzada. Al activarlo, la energía se descontrola y revela su propósito: destruir a la humanidad. El caos llega a Ámsterdam, ahora dominada por máquinas. Noah pierde a su familia y, junto a Alma, promete rebelarse. Mientras tanto, Emma vive el apagón en la universidad, donde la diversión se convierte en terror cuando aparecen robots asesinos.",
            personajes: ["Chappie","Dr.Rodriguez", "Dr.Martinez","Noah", "AlmaTrabajo", "Emma", "Estudiante1", "Estudiante2", "Estudiante3"]
        },
        {
            id:4,
            nombreCap: "El infierno",
            imgPortada: "./imagenes/capitulo1.jpg",
            video: "video/cap1.mp4",
            descripcion: "Ámsterdam está en ruinas, dominada por robots. Noah descubre que su padre fue asesinado y que su madre y hermana desaparecieron; junto a Alma promete luchar por sobrevivir. En la universidad, Emma presencia un apagón durante un partido, y el terror comienza cuando sus compañeros son atacados y aparecen los ojos fríos de los robots.",
            personajes: ["Noah", "AlmaTrabajo", "Emma", "Estudiante1", "Estudiante2", "Estudiante3"]
        },
        {
            id:5,
            nombreCap: "El encuentro",
            imgPortada: "./imagenes/capitulo1.jpg",
            video: "video/cap1.mp4",
            descripcion: "En una Ámsterdam en ruinas, Emma se cruza con Noah y Alma, perseguidos por un dron. Ella los ayuda, pero Alma muere tras revelar que los robots no fueron creados para destruir. Noah, devastado, entierra a su compañera con Emma. Entre la penumbra surge Chappie, un robot con señales de conciencia. Noah ve en él la última esperanza: cambiar su chip para que luche contra las máquinas. El cielo rojo anuncia que el fin ya ha comenzado.",
            personajes: ["Noah", "AlmaTrabajo", "Emma"]
        },
        {
            id:6,
            nombreCap: "Arreglar lo que no dañamos",
               imgPortada: "./imagenes/capitulo1.jpg",
            video: "video/cap1.mp4",
            descripcion: "Emma y Noah logran insertar el chip en Chappie, restaurando su programación y devolviéndole la capacidad de controlar a los demás robots. Con su reinicio, la amenaza termina y el mundo empieza a recuperarse. Tres años después, Emma y Noah viven en paz en una granja junto a su hija Emily, mientras Chappie los acompaña, protegiendo y enseñando que la tecnología, bien usada, puede ser un aliado de la humanidad.",
            personajes: ["Noah", "Chappie", "Emma","Emily"]
        },
                       
    ]
} 

/* const tituloComic = document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".descripcion-comic");
const imgComic = document.querySelector(".img-comic");
const grid = document.querySelector(".grid");
 */

/* mostrar info en la base de datos de la pagina */
/* tituloComic.textContent = comic.nombreComic;
descripcionComic.textContent = comic.descripcion;
 */

/* imprimir info del cap */
/* comic.capitulos.forEach(cap => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <p>${cap.nombreCap}</p> 
    
    <img src="${cap.imgPortada}" width="190" alt="">
            ` 

             grid.appendChild(div);
}); */