let cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "CSS/style.css"


//Se establece el contenedor principal en una variable constante 
const appContainer = document.getElementById("app");

// Se crea la variable nav_container donde tendra un <div>
var nav_container = document.createElement("div");
//El establece que el id del div sera nav
nav_container.setAttribute("id", "nav");

//Accedo a div por medio del id
let nav = document.getElementById("nav");
nav.innerHTML = "Hola, aqui va el logo de duoling";

//Agrega elementos al contenedor principal
appContainer.appendChild(nav_container);