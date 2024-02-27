
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

const nav3 = document.createElement("div");
nav3.setAttribute("id", "nav3");

//Se agregan los div creados a la variable principal Navbar
navbar.appendChild(nav1);
navbar.appendChild(nav2);
navbar.appendChild(nav3);

//Primera división
const division1 = document.createElement("division1");//Se crea la variable de la primera sección
division1.setAttribute("id", "division1"); //Se asigna un ID a la variable division1

const divi1 = document.createElement("div");//creación de los div
divi1.setAttribute("id", "divi1");//Se establece su id

const divi2 = document.createElement("div");//creación del segundo div
divi2.setAttribute("id", "divi2");//Se establece su id 

const divi3 = document.createElement("button1"); //creacion del tercero div
button1.setAttribute("id", "button1"); //Se establece el id

//Se agrega los div a la primera división 
division1.appendChild(divi1);
division1.appendChild(divi2);
division1.appendChild(divi3);


//Agrega elementos al contenedor principal
appContainer.appendChild(navbar);
appContainer.appendChild(division1);

//Se ingresa el contenido de los div del navbar
nav1.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg">';
nav2.innerHTML = '<a id = "idioma" href = ""> IDIOMA DE LA PÁGINA: ESPAÑOL</a>';
nav3.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg">';

//Se ingresa el contenido de los div de la primera division 
divi1.innerHTML = '<img width="500" height="500" align="center" src= "CSS/img/animation2.gif">'; //Gif de entredo
divi2.innerHTML = '<h1>¡La forma divertida, efectiva y <br> gratis de aprender un idioma!</h1>'; //Texto
divi3.innerHTML = 'HOLA';


