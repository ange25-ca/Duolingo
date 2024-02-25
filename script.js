
// Se crea el accceso al css desde JS
let cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "CSS/style.css";
document.head.appendChild(cssLink);


// Se establece el contenedor principal en una variable constante 
const appContainer = document.getElementById("app");

const navbar = document.createElement("navbar");// Se crea la variable para el Navbar 
navbar.setAttribute("id", "navbar"); //Se asigna un ID a la variable navbar

const nav1 = document.createElement("div");//Se crea dentro del navbar el primer div
nav1.setAttribute("id", "nav1");// Se asigna un ID a al primer div

const nav2 = document.createElement("div"); //Se crea dentro del navbar el segundo div
nav2.setAttribute("id","nav2");// Se asigna un ID al segundo div

//Se agregan los div creados a la variable principal Navbar
navbar.appendChild(nav1);
navbar.appendChild(nav2);


const division1 = document.createElement("division1");//Se crea la variable de la primera sección
division1.setAttribute("id", "division1"); //Se asigna un ID a la variable division1

const divi1 = document.createElement("div");
divi1.setAttribute("id", "divi1");

const divi2 = document.createElement("div");
divi2.setAttribute("id", "divi2");

//Se agrega los div a la primera división 
division1.appendChild(divi1);
division1.appendChild(divi2);


//Agrega elementos al contenedor principal
appContainer.appendChild(navbar);
appContainer.appendChild(division1);

//Se ingresa el contenido de los div 
nav1.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg">';
nav2.innerHTML = "Hola, aqui va el logo de duoling";

divi1.innerHTML = '<img width="500" height="500" align="center" src= "CSS/img/animation2.gif">';