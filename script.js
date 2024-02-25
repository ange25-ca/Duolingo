let cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "CSS/style.css";

document.head.appendChild(cssLink);

// Se establece el contenedor principal en una variable constante 
const appContainer = document.getElementById("app");

// Se crea el navbar
const navbar = document.createElement("navbar");
navbar.setAttribute("id", "navbar");

const nav1 = document.createElement("div");
const nav2 = document.createElement("div");


navbar.appendChild(nav1);
navbar.appendChild(nav2);

//Agrega elementos al contenedor principal
appContainer.appendChild(navbar);


//Accedo a div por medio del id
nav1.innerHTML = "Hola, aqui va el logo de duoling";
nav2.innerHTML = '<img src = "CSS/img/logo.png">';
