

// Se establece el contenedor principal en una variable constante 
const appContainer = document.getElementById("app");

// Se crea la variable para el Navbar
const navbar = document.createElement("navbar"); 
navbar.setAttribute("id", "navbar"); 

//Contenido del navbar
const nav1 = document.createElement("div");
nav1.setAttribute("id", "nav1");

const nav2 = document.createElement("div"); 
nav2.setAttribute("id","nav2");

const nav3 = document.createElement("div");
nav3.setAttribute("id", "nav3");

//Se agregan los div creados a la variable principal Navbar
navbar.appendChild(nav1);
navbar.appendChild(nav2);
navbar.appendChild(nav3);

//Primera section
var section = document.createElement("section");//Se crea la variable de la primera sección
section.setAttribute("id", "section"); //Se asigna un ID a la variable section

//Contenido de la primera section
const divi1 = document.createElement("div");
divi1.setAttribute("id", "divi1");

var divi2 = document.createElement("div"); //Div general
divi2.setAttribute("id", "divi2");

const divi2_1 = document.createElement("div"); //Texto de bienvenida
divi2_1.setAttribute("id", "divi2_1");

const divi2_2 = document.createElement("div"); //Button de "EMPEZAR AHORA"
divi2_2.setAttribute("id", "divi2_2"); 

const divi2_3 = document.createElement("div"); //Button de "Tengo una cuenta"
divi2_3.setAttribute("id", "divi2_3"); 

//Se agrega al div principal (divi2)
divi2.appendChild(divi2_1);
divi2.appendChild(divi2_2);
divi2.appendChild(divi2_3);


//Se agrega los div a la primera section 
section.appendChild(divi1);
section.appendChild(divi2);

//Agrega elementos al contenedor principal
appContainer.appendChild(navbar);
appContainer.appendChild(section);


//Se ingresa el contenido de los div del navbar
nav1.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg">';
nav2.innerHTML = '<a id = "idioma" href = ""> IDIOMA DE LA PÁGINA: ESPAÑOL</a>';
nav3.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg">';

//Se ingresa el contenido de los div de la primera section 
divi1.innerHTML = '<img width="500" height="500" align="center" src= "CSS/img/animation2.gif">'; //Gif de entredo
divi2_1.innerHTML = '<h1>¡La forma divertida, efectiva y <br> gratis de aprender un idioma!</h1>'; //Texto
divi2_2.innerHTML = '<button onclik = "reedireccion()" class = btn>EMPIEZA AHORA</button>' 
divi2_3.innerHTML = '<button class = btn1>TENGO UNA CUENTA</button>';


//DISEÑO DE LA PAGINA

//Se agrega el favicon a la pestaña de navegación
var style = document.createElement("style");
style.string = "text/css";

style.textContent = `
    @import url(https://db.onlinewebfonts.com/c/14936bb7a4b6575fd2eee80a3ab52cc2?family=Feather+Bold);
    @import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap); 
`;
//Se accede directamente al head del HTML
var head = document.head ;

//Se agrega el style con las letras importadas
head.appendChild(style);


//Estilos de los elemtos por su ID
document.getElementById("navbar").style.backgroundColor = "#fff";
document.getElementById("navbar").style.display = "flex";
document.getElementById("navbar").style.textAlign = "center";
document.getElementById("navbar").style.marginLeft = "5rem";
document.getElementById("navbar").style.marginRight = "5rem";
document.getElementById("navbar").style.marginTop = "2rem";

document.getElementById("nav1").style.marginLeft = "5rem";

document.getElementById("nav2").style.display = "flex";
document.getElementById("nav2").style.fontFamily = "'Feather Bold'";
document.getElementById("nav2").style.color = "#9f9e9e";
document.getElementById("nav2").style.fontSize = "0.9rem";
document.getElementById("nav2").style.padding = "0.6rem";
document.getElementById("nav2").style.marginLeft = "29rem";

document.getElementById("nav3").style.marginTop = "0.5rem";

document.querySelectorAll("a").forEach(function(link) {
    link.style.textDecoration = "none";
    link.style.color = "#afafaf";
    link.style.fontWeight = "bold";
});

document.getElementById("section").style.textAlign = "left";
document.getElementById("section").style.borderStyle = "double";
document.getElementById("section").style.display = "flex";
document.getElementById("section").style.marginLeft = "5rem";
document.getElementById("section").style.marginRight = "5rem";

document.getElementById("divi2").style.textAlign = "center";
document.getElementById("divi2").style.marginLeft = "9rem";

document.getElementById("divi2_1").style.fontWeight = "bold";
document.getElementById("divi2_1").style.fontFamily = "nunito";
document.getElementById("divi2_1").style.color = "#4B4B4B";
document.getElementById("divi2_1").style.textAlign = "left";
document.getElementById("divi2_1").style.fontSize = "0.7rem";
document.getElementById("divi2_1").style.marginTop = "6.5rem";
document.getElementById("divi2_1").style.paddingLeft = "3rem";
document.getElementById("divi2_1").style.paddingRight = "3rem";

document.getElementById("divi2_2").style.marginTop = "2rem";

document.querySelectorAll(".btn").forEach(function(btn) {
    btn.style.fontSize = "1rem";
    btn.style.fontFamily = "'Feather Bold'";
    btn.style.color = "#ffff";
    btn.style.textAlign = "center";
    btn.style.boxSizing = "border-box";
    btn.style.textTransform = "uppercase";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#58CC02";
    btn.style.borderRadius = "0.6rem";
    btn.style.borderStyle = "none";
    btn.style.width = "15.1rem";
    btn.style.height = "2.6rem";
    btn.style.boxShadow = "0.01rem 0.3rem #61B800";
    //Se agrega la función para el color cuando se posiciona encima del btn
    btn.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#61E002";
    });
    //Se agrega la función para que regrese el color 
    btn.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#58CC02";
    });
});

document.querySelectorAll(".btn1").forEach(function(btn1) {
    btn1.style.marginTop = "1rem";
    btn1.style.fontSize = "1rem";
    btn1.style.fontFamily = "'Feather Bold'";
    btn1.style.color = "#199EDD";
    btn1.style.textAlign = "center";
    btn1.style.boxSizing = "border-box";
    btn1.style.textTransform = "uppercase";
    btn1.style.cursor = "pointer";
    btn1.style.backgroundColor = "#ffffff";
    btn1.style.borderRadius = "0.6rem";
    btn1.style.borderStyle = "none";
    btn1.style.width = "15.2rem";
    btn1.style.height = "2.6rem";
    btn1.style.boxShadow = "0.02rem 0.08rem 0rem 0.11rem #CFCFCF";

    //Se agrega la función para el color cuando se posiciona encima del btn
    btn1.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#E5E5E5";
    });
    //Se agrega la función para que regrese el color 
    btn1.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#ffffff";
    });
});