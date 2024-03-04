

// Se establece el contenedor principal en una variable constante 
const appContainer = document.getElementById("app");

// Se crea la variable para el Navbar
var navbar = document.createElement("navbar"); 
navbar.setAttribute("id", "navbar"); 

const nav = document.createElement("nav");
navbar.setAttribute("id", "nav");

//Contenido del navbar
const nav1 = document.createElement("div");
nav1.setAttribute("id", "nav1");

const nav2 = document.createElement("div"); 
nav2.setAttribute("id","nav2");

//Se agregan los div creados a la variable principal Navbar
nav.appendChild(nav1);
nav.appendChild(nav2);

navbar.appendChild(nav);

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

var carrusel = document.createElement("carrusel");
carrusel.setAttribute("id", "carrusel");

var banderas = document.createElement("banderas");
banderas.setAttribute("id", "banderas");

var bandera1 = document.createElement("bandera1"); 
bandera1.setAttribute("id", "bandera"); 

var bandera2 = document.createElement("bandera2");
bandera2.setAttribute("id", "bandera");

var bandera3 = document.createElement("bandera2");
bandera3.setAttribute("id", "bandera");

var bandera4 = document.createElement("bandera3");
bandera4.setAttribute("id", "bandera");

var bandera5 = document.createElement("bandera4");
bandera5.setAttribute("id", "bandera");

var bandera6 = document.createElement("bandera5");
bandera6.setAttribute("id", "bandera");

var bandera7 = document.createElement("bandera7");
bandera7.setAttribute("id", "bandera");

var bandera8 = document.createElement("bandera8");
bandera8.setAttribute("id", "bandera");

//Flechas para retroceder y avanzar en el carrusel
var flechaizq = document.createElement("div");
flechaizq.setAttribute("id", "flechaizq");

var flechader = document.createElement("div");
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

//Tercera section
var section3 = document.createElement("section3");//Se crea la variable de la tercera sección
section3.setAttribute("id", "section3");

var divi3 = document.createElement("divi3");
divi3.setAttribute("id", "divi3");

var divi3_text = document.createElement("divi3_text");
divi3_text.setAttribute("id", "divi3_text");

var divi3_1 = document.createElement("divi3_1");
divi3_1.setAttribute("id", "divi3_1");

var divi3_2 = document.createElement("divi3_2");
divi3_2.setAttribute("id", "divi3_2");

var divi3_3 = document.createElement("divi3_3");
divi3_3.setAttribute("id", "divi3_3");

//Se agrega los textos al div_text
divi3_text.appendChild(divi3_1);
divi3_text.appendChild(divi3_2);

//Se agrega los div al div principal
divi3.appendChild(divi3_text);
divi3.appendChild(divi3_3);

//Se agrega el div general a la section
section3.appendChild(divi3);

//Cuarta section
var section4 = document.createElement("section4");//Se crea la variable de la cuarta sección
section4.setAttribute("id", "section4");

var divi4 = document.createElement("divi4");
divi4.setAttribute("id", "divi4");

var divi4_1 = document.createElement("divi4_1");
divi4_1.setAttribute("id", "divi4_1");

var divi4_text = document.createElement("divi4_text");
divi4_text.setAttribute("id", "divi4_text");

var divi4_2 = document.createElement("divi4_2");
divi4_2.setAttribute("id", "divi4_2");

var divi4_3 = document.createElement("divi4_3");
divi4_3.setAttribute("id", "divi4_3");

//Se agrega los textos al div_text
divi4_text.appendChild(divi4_2);
divi4_text.appendChild(divi4_3);

//Se agrega los div al div principal
divi4.appendChild(divi4_1);
divi4.appendChild(divi4_text);

//Se agrega el div general a la section
section4.appendChild(divi4);

//Quinta section
var section5 = document.createElement("section5");//Se crea la variable de la tercera sección
section5.setAttribute("id", "section5");

var divi5 = document.createElement("divi5");
divi5.setAttribute("id", "divi5");

var divi5_text = document.createElement("divi5_text");
divi5_text.setAttribute("id", "divi5_text");

var divi5_1 = document.createElement("divi5_1");
divi5_1.setAttribute("id", "divi5_1");

var divi5_2 = document.createElement("divi5_2");
divi5_2.setAttribute("id", "divi5_2");

var divi5_3 = document.createElement("divi5_3");
divi5_3.setAttribute("id", "divi5_3");

//Se agrega los textos al div_text
divi5_text.appendChild(divi5_1);
divi5_text.appendChild(divi5_2);

//Se agrega los div al div principal
divi5.appendChild(divi5_text);
divi5.appendChild(divi5_3);

//Se agrega el div general a la section
section5.appendChild(divi5);

//Sexta section
var section6 = document.createElement("section6");//Se crea la variable de la cuarta sección
section6.setAttribute("id", "section6");

var divi6 = document.createElement("divi6");
divi6.setAttribute("id", "divi6");

var divi6_1 = document.createElement("divi6_1");
divi6_1.setAttribute("id", "divi6_1");

var divi6_text = document.createElement("divi6_text");
divi6_text.setAttribute("id", "divi6_text");

var divi6_2 = document.createElement("divi6_2");
divi6_2.setAttribute("id", "divi6_2");

var divi6_3 = document.createElement("divi6_3");
divi6_3.setAttribute("id", "divi6_3");

//Se agrega los textos al div_text
divi6_text.appendChild(divi6_2);
divi6_text.appendChild(divi6_3);

//Se agrega los div al div principal
divi6.appendChild(divi6_1);
divi6.appendChild(divi6_text);

//Se agrega el div general a la section
section6.appendChild(divi6);

//Septima seccion
var section7 = document.createElement("section7");
section7.setAttribute("id","section7");

var divi7 = document.createElement("divi7");
divi7.setAttribute("id", "divi7");

var divi7_1 = document.createElement("divi7_1");
divi7_1.setAttribute("id", "divi7_1");

var divi7_btn = document.createElement("divi7_btn");
divi7_btn.setAttribute("id", "divi7_btn");

var divi7_btn1 = document.createElement("divi7_btn1");
divi7_btn1.setAttribute("id", "divi7_btn");

var divi7_btn2 = document.createElement("divi7_btn2");
divi7_btn2.setAttribute("id", "divi7_btn2");

divi7_btn.appendChild(divi7_btn1);//Se agrego al btn general
divi7_btn.appendChild(divi7_btn2);

//Se agreg los div al div principal
divi7.appendChild(divi7_1);
divi7.appendChild(divi7_btn);

//Se agrega el div a la seccion 7
section7.appendChild(divi7);

//Octava seccion
var section8 = document.createElement("section8");
section8.setAttribute("id","section8");

var divi8 = document.createElement("divi8");
divi8.setAttribute("id", "divi8");

var divi8_1 = document.createElement("divi8_1");
divi8_1.setAttribute("id", "divi8_1");

var divi8_text = document.createElement("divi8_text");
divi8_text.setAttribute("id", "divi8_text")

var divi8_2 = document.createElement("divi8_2");
divi8_2.setAttribute("id", "divi8_2");

var divi8_btn = document.createElement("divi8_btn");
divi8_btn.setAttribute("id", "divi8_btn");

var divi8_3 = document.createElement("divi8_3");
divi8_3.setAttribute("id", "divi8_3");

divi8_btn.appendChild(divi8_3);

divi8_text.appendChild(divi8_2);
divi8_text.appendChild(divi8_btn);

//Se agreg los div al div principal
divi8.appendChild(divi8_1);
divi8.appendChild(divi8_text);

//Se agrega el div a la seccion
section8.appendChild(divi8);

//Novena section
var section9 = document.createElement("section9");//Se crea la variable de la novena sección
section9.setAttribute("id", "section9");

var divi9 = document.createElement("divi9");
divi9.setAttribute("id", "divi9");

var divi9_text = document.createElement("divi9_text");
divi9_text.setAttribute("id", "divi9_text");

var divi9_1 = document.createElement("divi9_1");
divi9_1.setAttribute("id", "divi9_1");

var divi9_2 = document.createElement("divi9_2");
divi9_2.setAttribute("id", "divi9_2");

var divi9_3 = document.createElement("divi9_3");
divi9_3.setAttribute("id", "divi9_3");

var divi9_4 = document.createElement("divi9_4");
divi9_4.setAttribute("id", "divi9_4");

//Se agrega los textos al div_text
divi9_text.appendChild(divi9_1);
divi9_text.appendChild(divi9_2);
divi9_text.appendChild(divi9_3);

//Se agrega los div al div principal
divi9.appendChild(divi9_text);
divi9.appendChild(divi9_4);

//Se agrega el div general a la section
section9.appendChild(divi9);

//Decima section
var section10 = document.createElement("section10");//Se crea la variable de la cuarta sección
section10.setAttribute("id", "section10");

var divi10 = document.createElement("divi10");
divi10.setAttribute("id", "divi10");

var divi10_1 = document.createElement("divi10_1");
divi10_1.setAttribute("id", "divi10_1");

var divi10_text = document.createElement("divi10_text");
divi10_text.setAttribute("id", "divi10_text");

var divi10_2 = document.createElement("divi10_2");
divi10_2.setAttribute("id", "divi10_2");

var divi10_3 = document.createElement("divi10_3");
divi10_3.setAttribute("id", "divi10_3");

var divi10_btn = document.createElement("divi10_btn");
divi10_btn.setAttribute("id", "divi10_btn");

//Se agrega los textos al div_text
divi10_text.appendChild(divi10_2);
divi10_text.appendChild(divi10_3);
divi10_text.appendChild(divi10_btn);

//Se agrega los div al div principal
divi10.appendChild(divi10_1);
divi10.appendChild(divi10_text);

//Se agrega el div general a la section
section10.appendChild(divi10);

//Se crea la variable para la section onceava
var section11 = document.createElement("section11");//Se crea la variable de la tercera sección
section11.setAttribute("id", "section11");

var divi11 = document.createElement("divi11");
divi11.setAttribute("id", "divi11");

var divi11_text = document.createElement("divi11_text");
divi11_text.setAttribute("id", "divi11_text");

var divi11_1 = document.createElement("divi11_1");
divi11_1.setAttribute("id", "divi11_1");

var divi11_2 = document.createElement("divi11_2");
divi11_2.setAttribute("id", "divi11_2");

var divi11_btn = document.createElement("divi11_btn");
divi11_btn.setAttribute("id", "divi11_btn");

var divi11_3 = document.createElement("divi11_3");
divi11_3.setAttribute("id", "divi11_3");

//Se agrega los textos al div_text
divi11_text.appendChild(divi11_1);
divi11_text.appendChild(divi11_2);
divi11_text.appendChild(divi11_btn);

//Se agrega los div al div principal
divi11.appendChild(divi11_text);
divi11.appendChild(divi11_3);

//Se agrega el div general a la section
section11.appendChild(divi11);

//Doceava section
var section12 = document.createElement("section12");//Se crea la variable de la cuarta sección
section12.setAttribute("id", "section12");

var divi12 = document.createElement("divi12");
divi12.setAttribute("id", "divi12");

var divi12_1 = document.createElement("divi12_1");
divi12_1.setAttribute("id", "divi12_1");

var divi12_text = document.createElement("divi12_text");
divi12_text.setAttribute("id", "divi12_text");

var divi12_2 = document.createElement("divi12_2");
divi12_2.setAttribute("id", "divi12_2");

var divi12_3 = document.createElement("divi12_3");
divi12_3.setAttribute("id", "divi12_3");

var divi12_btn = document.createElement("divi12_btn");
divi12_btn.setAttribute("id", "divi12_btn");

//Se agrega los textos al div_text
divi12_text.appendChild(divi12_2);
divi12_text.appendChild(divi12_3);
divi12_text.appendChild(divi12_btn);

//Se agrega los div al div principal
divi12.appendChild(divi12_1);
divi12.appendChild(divi12_text);

//Se agrega el div general a la section
section12.appendChild(divi12);

//Treceava seccion
var section13 = document.createElement("section13");
section13.setAttribute("id","section13");

var divi13 = document.createElement("divi13");
divi13.setAttribute("id", "divi13");

var divi13_1 = document.createElement("divi13_1");
divi13_1.setAttribute("id", "divi13_1");

var divi13_btn = document.createElement("divi13_btn");
divi13_btn.setAttribute("id", "divi13_btn");

var divi13_btn1 = document.createElement("divi13_btn1");
divi13_btn1.setAttribute("id", "divi13_btn");

var divi13_btn2 = document.createElement("divi13_btn2");
divi13_btn2.setAttribute("id", "divi13_btn2");

divi13_btn.appendChild(divi13_btn1);//Se agrego al btn general
divi13_btn.appendChild(divi13_btn2);


//Se agreg los div al div principal
divi13.appendChild(divi13_1);
divi13.appendChild(divi13_btn);


//Se agrega el div a la seccion
section13.appendChild(divi13);

//Footer
var footer = document.createElement("footer");
footer.setAttribute("id", "fotter");

var divifooter = document.createElement("divifooter");
divifooter.setAttribute("id", "divifooter");

var divif_text = document.createElement("divif_text");
divif_text.setAttribute("id", "divif_text");

var divif_1 = document.createElement("divif_1");
divif_1.setAttribute("id", "divif_1");

var divif_2 = document.createElement("divif_2");
divif_2.setAttribute("id", "divif_2");

var divif_3 = document.createElement("divif_3");
divif_3.setAttribute("id", "divif_3");

//Se agrega los div al div principal
divif_text.appendChild(divif_1);
divif_text.appendChild(divif_2);
divif_text.appendChild(divif_3);

divifooter.appendChild(divif_text);

//Se agrega el div general a la section
footer.appendChild(divifooter);

//Agrega elementos al contenedor principal
appContainer.appendChild(navbar);
appContainer.appendChild(section);
appContainer.appendChild(section2);
appContainer.appendChild(section3);
appContainer.appendChild(section4);
appContainer.appendChild(section5);
appContainer.appendChild(section6);
appContainer.appendChild(section7);
appContainer.appendChild(section8);
appContainer.appendChild(section8);
appContainer.appendChild(section9);
appContainer.appendChild(section10);
appContainer.appendChild(section11);
appContainer.appendChild(section12);
appContainer.appendChild(section13);
appContainer.appendChild(footer);

//Se ingresa el contenido de los div del navbar
nav1.innerHTML = '<img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg">';
nav2.innerHTML = '<a id = "idioma" href = ""> IDIOMA DE LA PÁGINA: ESPAÑOL <img style = "width: 1rem ; height: 0.8rem;" src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg"></a>';

//Se ingresa el contenido de los div de la primera section 
divi1.innerHTML = '<img width="500" height="500" src="CSS/img/animation2.gif">'; //Gif de entredo
divi2_1.innerHTML = '<h1>¡La forma divertida, efectiva y <br> gratis de aprender un idioma!</h1>'; //Texto
divi2_2.innerHTML = '<button class = btn>EMPIEZA AHORA</button>' ;
divi2_3.innerHTML = '<button class = btn1>TENGO UNA CUENTA</button>';

//Se agrega el contenido de los div de la segunda section
bandera1.innerHTML = '<nav><span><svg viewBox="0 0 80 66" fill = "none" style="height: 28.9756px; width: 50px;"><image height="3168" id="ingles" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"</image></svg><span id="inglestext">Inglés</span></span></nav>';
bandera2.innerHTML = '<nav><span class="carru1"><svg viewBox="0 132 82 66" data-test="flag-fr" style="height: 28.9756px; width: 50px;"><image id="frances"height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="francestext">Francés</span></span></nav>';
bandera3.innerHTML = '<nav><span class="carru2" ><svg viewBox="0 198 82 66" data-test="flag-de" style="height: 28.9756px; width: 50px;"><image id="aleman" height="3168"  width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"</image></svg><span id="alemantext">Alemán</span></span></nav>';
bandera4.innerHTML = '<nav><span class="carru3"><svg viewBox="0 330 82 66" data-test="flag-it" style="height: 28.9756px; width: 50px;"><image id="italiano" height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="italianotext">Italiano</span></span></nav>';
bandera5.innerHTML = '<nav><span class="carru4" ><svg viewBox="0 594 82 66" data-test="flag-pt" style="height: 28.9756px; width: 50px;"><image id="portugues" height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="portutext">Portugués</span></span></nav>';
bandera6.innerHTML = '<nav><span class="carru5" ><svg viewBox="0 2244 82 66" data-test="flag-ca" style="height: 28.9756px; width: 50px;"><image id="catalan" height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="catalantext">Catalán</span></span></nav>';
bandera7.innerHTML = '<nav><span class="carru6" ><svg viewBox="0 528 82 66" data-test="flag-ru" style="height: 28.9756px; width: 50px;"><image id="ruso" height="3168"  width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="rusotext">Ruso</span></span></nav>';
bandera8.innerHTML = '<nav><span class="carru7"><svg viewBox="0 792 82 66" data-test="flag-sv" style="height: 28.9756px; width: 50px;"><image id="sueco" height="3168" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg><span id="suecotext">Sueco</span></span></nav>';

flechaizq.innerHTML = '<button id = "arrow-wreapper"><span class = "arrow-prev"></span>&#10094</button>';
flechader.innerHTML = '<button id = "flechader"><span></span>&#10095</button>';

// Se inserta el contenido de los div de la tercera section
divi3_1.innerHTML = '<p>divertido, efectivo y <br> gratis</p>';
divi3_2.innerHTML = '<p>Aprender con Duolingo es divertido y <a id = "modi">los estudios demuestran que funciona.</a>¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!</p>';
divi3_3.innerHTML = '<img height = "400" width = "350" src = "CSS/img/divertido_efectivo_gratis.png">';

// Se inserta el contenido de los div de la cuarta section
divi4_1.innerHTML = '<img height = "400" width = "400" src = "CSS/img/respaldo_por_la_ciencia.jpg">';
divi4_2.innerHTML = '<p>respaldado por la ciencia<p>';
divi4_3.innerHTML = '<p>Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.</p>';

// Se inserta el contenido de los div de la quinta section
divi5_1.innerHTML = '<p>mantén tu <br> motivación</p>';
divi5_2.innerHTML = '<p>Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.</p>';
divi5_3.innerHTML = '<img height = "400" width = "400" src = "CSS/img/manten_tu_motivacion.png">';

// Se inserta el contenido de los div de la sexta section
divi6_1.innerHTML = '<img height = "400" width = "460" src = "CSS/img/aprendizaje_personalizado.jpg">';
divi6_2.innerHTML = '<p>aprendizaje personalizado<p>';
divi6_3.innerHTML = '<p>Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.</p>';

// Se inserta el contenido de los div de la septima section
divi7_1.innerHTML = '<p>aprende cuando quieras y donde quieras</p>';
divi7_btn1.innerHTML = '<button id = "divi7_btn1" class = "aprende_btn"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="2 0 50 50"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path></svg><span><h2>Descárgalo en la</h2><h1>App store</h1></span></button>';
divi7_btn2.innerHTML = '<button id = "divi7_btn2" class = "aprende_btn"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="2 3 30 30"><path d="M 7.6230469 3.2109375 L 18 13.585938 L 20.677734 10.908203 C 17.018734 8.6882031 12.118063 5.7100938 9.9140625 4.3710938 L 8.4375 3.4765625 C 8.1765 3.3175625 7.8970469 3.2319375 7.6230469 3.2109375 z M 6.0390625 4.453125 C 6.0180625 4.567125 6 4.6816875 6 4.8046875 L 6 25.308594 C 6 25.394594 6.0172969 25.474641 6.0292969 25.556641 L 16.585938 15 L 6.0390625 4.453125 z M 22.4375 11.976562 L 19.414062 15 L 22.384766 17.970703 C 23.958766 17.016703 25.048922 16.35425 25.169922 16.28125 C 25.704922 15.95425 26.007047 15.460875 25.998047 14.921875 C 25.990047 14.392875 25.687828 13.919906 25.173828 13.628906 C 25.058828 13.562906 23.9835 12.913563 22.4375 11.976562 z M 18 16.414062 L 7.6542969 26.759766 C 7.8552969 26.724766 8.0560469 26.664828 8.2480469 26.548828 C 8.5140469 26.386828 15.7 22.027062 20.625 19.039062 L 18 16.414062 z"></path></svg><span><h2>Disponible en</h2><h1>Google Play</h1></span></button>';


//Se inserta el contenido de los div de la octava seccion
divi8_1.innerHTML = '<img height = "500" width = "500" style = textdecoration = "none" src = "CSS/img/superduo.gif">';
divi8_2.innerHTML = '<nav><a class = "superduo"><img id="SuperDuolingo" height="200" width = "450" src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/dd7453522d3192d4df06d4652508b8bc.svg" width="339"></a></nav>';
divi8_3.innerHTML = '<button class = super_btn>prueba 2 semanas gratis</button>';

// Se inserta el contenido de los div de la novena section
divi9_1.innerHTML = '<p>duolingo english test</p>';
divi9_2.innerHTML = '<p>Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí.</p>';
divi9_3.innerHTML = '<button class = btn1>Certifica tu inglés</button>';
divi9_4.innerHTML = '<img height = "450" width = "400" src = "CSS/img/duolingo_english_test.jpg">';

//Se inserta el contenido de la decima section
divi10_1.innerHTML = '<img height = "450" width = "450" src = "CSS/img/duolingo_for_schools.png">';
divi10_2.innerHTML = '<p>duolingo for schools<p>';
divi10_3.innerHTML = '<p>Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.</p>';
divi10_btn.innerHTML = '<button class = btn1>Potencia tu salón de clases</button>';

// Se inserta el contenido de los div de la onceava section
divi11_1.innerHTML = '<p>duolingo abc</p>';
divi11_2.innerHTML = '<p>¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente gratis!</p>';
divi11_btn.innerHTML = '<button class =btn1>Conoce duolingo ABC</button>';
divi11_3.innerHTML = '<img height = "350" width = "350" src = "CSS/img/duolingo_abc.jpg">';

//Se inserta el contenido de los div de la doceava section
divi12_1.innerHTML = '<img height = "450" width = "450" src = "CSS/img/duolingo_math.jpg">';
divi12_2.innerHTML = '<p>duolingo math<p>';
divi12_3.innerHTML = '<p>¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza matemática.<p>';
divi12_btn.innerHTML = '<button class =btn1>Mejora en matemática</button>';

// Se inserta el contenido de los div de la terceava section
divi13_1.innerHTML = '<p>aprende idiomas <br> con duolingo</p>';
divi13_btn1.innerHTML = '<button class = btn>EMPIEZA AHORA</button>';

//Se agrega la informacion del flooter
divif_1.innerHTML = '<ul><h3>Sobre nosotros</h3><li><a>Cusos</a></li><li><a>Misión</a></li><li><a>Método de enseñanza</a></li><li><a>Eficacia</a></li><li><a>Equipo</a></li><li><a>Investigación</a></li><li><a>Empleo</a></li><li><a>Guía para uso de marcas</a></li><li><a>Tienda</a></li><li><a>Prensa</a></li><li><a>Inversionistas</a></li><li><a>Contáctanos</a></li><ul>';
divif_1.innerHTML += '<ul><h3>Productos</h3><li><a>Duolingo</a></li><li><a>Duolingo for Schools</a></li><li><a>Duolingo English Test</a></li><li><a>Podcast</a></li><li><a>Duolingo for Business</a></li><li><nav>Súper Duolingo</a></li><li><a>Regala Súper Duolingo</a></li>';
divif_1.innerHTML += '<ul><h3>Aplicaciones</h3><li><a>Duolingo para Android</a></li><li><a>Duolingo para ¡OS</a></li></ul>';
divif_1.innerHTML += '<ul><h3>Ayuda y soporte</h3><li><a>App de Dolingo</a></li><li><a>Schools</a></li><li><a>Duoling English Test</a></li><li><a>Estado</a></li></ul>';
divif_1.innerHTML += '<ul><h3>Términos y <br> privacidad</h3><li><a>Normas de la comunidad</a></li><li><a>Términos</a></li><li><a>Privacidad</a></li><h3>Social</h3><li><a>Blog</a></li><li><a>Instagram</a></li><li><a>Facebook</a></li><li><a>Twitter</a></li><li><a>YouTube</a></li>';
divif_2.innerHTML = '<ul><h3>Idioma de la página:</h3><ul/>';
divif_3.innerHTML += '<ul><li>العربية</li><li>বাংলা</li><li>Čeština</li><li>Deutsch</li><li>Ελληνικά</li><li>English</li><li>Español</li><li>Français</li><li>हिंदीMagyar</li><li>Bahasa </li><li>Indonesia</li><li>Italiano</li><li>日本語한국어</li></ul>';
divif_3.innerHTML += '<ul><li>Nederlands</li><li>Polski</li><li>Português</li><li>Română</li><li>Русский</li><li>తెలుగుภาษาไทย</li><li>Tagalog</li><li>Türkçe</li><li>Українською</li><li>Tiếng Việt</li><li>中文</li></ul>';



