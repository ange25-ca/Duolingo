

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

const divi2 = document.createElement("div"); //Div general
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

//Segunda section
var section2 = document.createElement("section2");//Se crea la variable de la primera sección
section2.setAttribute("id", "section2");

const carrusel = document.createElement("div");
carrusel.setAttribute("id", "carrusel");

const banderas = document.createElement("div");
banderas.setAttribute("id", "banderas");

const bandera1 = document.createElement("div"); 
bandera1.setAttribute("id", "bandera"); 

const bandera2 = document.createElement("div");
bandera2.setAttribute("id", "bandera");

const bandera3 = document.createElement("div");
bandera3.setAttribute("id", "bandera");

const bandera4 = document.createElement("div");
bandera4.setAttribute("id", "bandera");

const bandera5 = document.createElement("div");
bandera5.setAttribute("id", "bandera");

const bandera6 = document.createElement("div");
bandera6.setAttribute("id", "bandera");

const bandera7 = document.createElement("div");
bandera7.setAttribute("id", "bandera");

const bandera8 = document.createElement("div");
bandera8.setAttribute("id", "bandera");

//Flechas para retroceder y avanzar en el carrusel
const flechaizq = document.createElement("div");
flechaizq.setAttribute("id", "flechaizq");

const flechader = document.createElement("div");
flechader.setAttribute("id", "flechader");

//Se agrega a la var banderas en general
banderas.appendChild(flechaizq);
banderas.appendChild(bandera1);
banderas.appendChild(bandera2);
banderas.appendChild(bandera3);
banderas.appendChild(bandera4);
banderas.appendChild(bandera5);
banderas.appendChild(bandera6);
banderas.appendChild(bandera7);
banderas.appendChild(bandera8);
banderas.appendChild(flechader);

//Se agrega banderas a carrusel
carrusel.appendChild(banderas);

//Se agrega carrusel a la seccion2
section2.appendChild(carrusel);

//Agrega elementos al contenedor principal
appContainer.appendChild(navbar);
appContainer.appendChild(section);
appContainer.appendChild(section2);

//Se ingresa el contenido de los div del navbar
nav1.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg">';
nav2.innerHTML = '<a id = "idioma" href = ""> IDIOMA DE LA PÁGINA: ESPAÑOL</a>';
nav3.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg">';

//Se ingresa el contenido de los div de la primera section 
divi1.innerHTML = '<img width="500" height="500" align="center" src= "CSS/img/animation2.gif">'; //Gif de entredo
divi2_1.innerHTML = '<h1>¡La forma divertida, efectiva y <br> gratis de aprender un idioma!</h1>'; //Texto
divi2_2.innerHTML = '<button onclik = "reedireccion()" class = btn>EMPIEZA AHORA</button>' 
divi2_3.innerHTML = '<button class = btn1>TENGO UNA CUENTA</button>';


//Se agrega el contenido de los div de la segunda section
bandera1.innerHTML = '<nav><a href=""><svg viewBox="0 0 80 66" fill = "none" style="height: 28.9756px; width: 50px;"><image height="3168" class="ingles" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"</image></svg><span id="inglestext">Inglés</span></a></nav>';
bandera2.innerHTML = '<nav><a class="frances" href=""><svg viewBox="0 132 82 66" data-test="flag-fr" style="height: 28.9756px; width: 50px;"><image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="francestext">Francés</span></a></nav>';
bandera3.innerHTML = '<nav><a class="aleman" href=""><svg viewBox="0 198 82 66" data-test="flag-de" style="height: 28.9756px; width: 50px;"><image height="3168"  width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"</image></svg><span id="alemantext">Alemán</span></a></nav>';
bandera4.innerHTML = '<nav><a class="italiano" href=""><svg viewBox="0 330 82 66" data-test="flag-it" style="height: 28.9756px; width: 50px;"><image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="italianotext">Italiano</span></a></nav>';
bandera5.innerHTML = '<nav><a class="portugues" href="/course/pt/es/Aprender-portugu%C3%A9s"><svg viewBox="0 594 82 66" data-test="flag-pt" style="height: 28.9756px; width: 50px;"><image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="portutext">Portugués</span></a></nav>';
bandera6.innerHTML = '<nav><a class="catalan" href="/course/ca/es/Aprender-catal%C3%A1n"><svg viewBox="0 2244 82 66" data-test="flag-ca" style="height: 28.9756px; width: 50px;"><image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="catalantext">Catalán</span></a></nav>';
bandera7.innerHTML = '<nav><a class="ruso" href="/course/ru/es/Aprender-ruso"><svg viewBox="0 528 82 66" data-test="flag-ru" style="height: 28.9756px; width: 50px;"><image height="3168"  width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="rusotext">Ruso</span></a></nav>';
bandera8.innerHTML = '<nav><a class="sueco" href="/course/sv/es/Aprender-sueco"><svg viewBox="0 792 82 66" data-test="flag-sv" style="height: 28.9756px; width: 50px;"><image height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="suecotext">Sueco</span></a></nav>';

flechaizq.innerHTML = '<nav id = "arrow-wreapper"><span class = "arrow-prev"></span>&#10094</nav>';
flechader.innerHTML = '<nav id = "flechader"><span class = "arrow-nex"></span>&#10095</nav>';

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
//Style para el navbar
document.querySelectorAll("navbar").forEach(function(navbar){
    
    navbar.style.backgroundColor = "#fff";
    navbar.style.display = "flex";
    navbar.style.textAlign = "center";
    navbar.style.marginLeft = "5rem";
    navbar.style.marginRight = "5rem";
    navbar.style.marginTop = "2rem";

    nav1.style.marginLeft = "5rem";

    nav2.style.display = "flex";
    nav2.style.fontFamily = "'Feather Bold'";
    nav2.style.color = "#9f9e9e";
    nav2.style.fontSize = "0.9rem";
    nav2.style.padding = "0.6rem";
    nav2.style.marginLeft = "29rem";

document.getElementById("nav3").style.marginTop = "0.5rem";
});

document.querySelectorAll("a").forEach(function(link) {
    link.style.textDecoration = "none";
    link.style.color = "#afafaf";
    link.style.fontWeight = "bold";
});

//Primera seccion
document.querySelectorAll("section").forEach(function(section){

    section.style.textAlign = "left";
    section.style.borderStyle = "double";
    section.style.display = "flex";
    section.style.marginLeft = "5rem";
    section.style.marginRight = "5rem";

    divi2.style.textAlign = "center";
    divi2.style.marginLeft = "9rem";

    divi2_1.style.fontWeight = "bold";
    divi2_1.style.fontFamily = "nunito";
    divi2_1.style.color = "#4B4B4B";
    divi2_1.style.textAlign = "left";
    divi2_1.style.fontSize = "0.7rem";
    divi2_1.style.marginTop = "6.5rem";
    divi2_1.style.paddingLeft = "3rem";
    divi2_1.style.paddingRight = "3rem";

    divi2_2.style.marginTop = "2rem";
});

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

//Style para la seccion 2
document.querySelectorAll("section2").forEach(function(section2){
    
    banderas.style.width = "67.7rem";
    banderas.style.height = "5rem";
    banderas.style.position = "relative";

    inglestext.style.color = "#777777";
    francestext.style.color = "#777777";
    alemantext.style.color = "#777777";
    italianotext.style.color = "#777777";
    francestext.style.color = "#777777";
    portutext.style.color = "#777777";
    catalantext.style.color = "#777777";
    rusotext.style.color = "#777777";
    suecotext.style.color = "#777777";

    banderas.style.display = "flex";
    banderas.style.textAlign = "center";
    banderas.style.alignItems = "center";
    banderas.style.borderStyle = "double";
    banderas.style.flexGrow = "1";
    banderas.style.flexBasis = "0";
    banderas.style.letterSpacing = "0.001rem";
    banderas.style.marginLeft = "5rem";
    banderas.style.marginRight = "5rem";
    banderas.style.gap = "1.5rem";

    flechader.style.color  = "#AFAFAF";
    flechader.style.cursor = "pointer";
    flechaizq.style.color = "#AFAFAF";
    flechaizq.style.cursor = "pointer";

});
