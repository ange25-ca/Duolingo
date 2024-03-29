//DISEÑO DE LA PAGINA

//Se agrega el favicon a la pestaña de navegación
var style = document.createElement("style");
style.string = "text/css";

//Importacion de tipos de fuente
style.textContent = `
    @import url(https://db.onlinewebfonts.com/c/14936bb7a4b6575fd2eee80a3ab52cc2?family=Feather+Bold);
    @import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap); 
    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap')
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Madimi+One&family=Signika+Negative:wght@300..700&display=swap')
`;

//Se accede directamente al head del HTML
var head = document.head ;

//Se agrega el style con las letras importadas
head.appendChild(style);


document.querySelectorAll("app").forEach(function(app){
    app.style.padding = "0";
    app.style.margin = "0";
    appContainer.style.width = "100%";
});

//Style para el navbar
document.querySelectorAll("navbar").forEach(function(navbar){
    
    navbar.style.justifyContent = "spaceround";
    navbar.style.position = "fixed";
    navbar.style.display = "flex";
    navbar.style.top = "0";
    nav1.style.zindex = "10000"; //Se sobreponga 
    navbar.style.width = "100%";

    nav.style.height = "5rem";
    nav.style.width = "3rem";
    nav.style.backgroundColor = "#fff";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.width = "100%";


    nav1.style.marginLeft = "8.1rem";
    nav1.style.marginTop = "0.7rem";

    nav2.style.display = "flex";
    nav2.style.fontFamily = 'Madimi One';
    nav2.style.fontWeight = "bold";
    nav2.style.color = "#9f9e9e";
    nav2.style.fontSize = "0.88rem";
    nav2.style.letterSpacing = "0.02rem"; 
    nav2.style.padding = "0.6rem";
    nav2.style.marginRight = "9rem";
    nav2.style.marginLeft = "8.1rem";
    nav2.style.marginTop = "0.7rem";

    idioma.style.textDecoration = "none";
    idioma.style.color = "#afafaf";
    idioma.style.fontWeight = "bold";

});

//Primera seccion 
document.querySelectorAll("section").forEach(function(section){

    section.style.textAlign = "left";
    section.style.display = "flex";
    section.style.marginLeft = "5rem";
    section.style.marginRight = "5rem";
    section.style.marginTop = "3rem";
    

    divi1.style.display = "flex";
    divi1.style.Width = "100%";
    divi1.style.height = "auto";

    divi2.style.textAlign = "center";
    divi2.style.marginLeft = "1.5rem";

    divi2_1.style.fontFamily = "'nunito'";
    divi2_1.style.display = "flex";
    divi2_1.style.color = "#4B4B4B";
    divi2_1.style.textAlign = "left";
    divi2_1.style.fontSize = "1.2rem";
    divi2_1.style.marginTop = "8.2rem";
    divi2_1.style.paddingLeft = "3rem";
    divi2_1.style.paddingRight = "2rem";

    divi2_2.style.marginTop = "3rem";
    divi2_2.style.marginLeft = "1rem";

    divi2_3.style.marginLeft = "1rem";
});

//Botones de la primera seccion
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
    btn.style.width = "20.7rem";
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

//Botones de segunda seccion
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
    btn1.style.width = "20.7rem";
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

//Style para la section 2
document.querySelectorAll("section2").forEach(function(section2){
    
    section2.style.color = "#777777";
    section2.style.width = "100%"; 
    section2.style.marginTop = "1rem";
    section2.style.display = "flex";

    banderas.style.objectFit = "cover";
    banderas.style.transition = "0.5s ease-in-out";
    banderas.style.scrollSnapAlign = "start";
    banderas.style.overflow = "hidden";
    banderas.style.display = "flex";
    banderas.style.fontSize = "0.9rem";
    banderas.style.letterSpacing = "0.1rem";
    banderas.style.gap = "1rem"; //Separa las banderas
    banderas.style.fontFamily = "nunito";
    banderas.style.fontWeight = "bold";
    banderas.style.textDecoration = "none"; 
    banderas.style.height = "5rem";
    banderas.style.width = "100%";
    banderas.style.alignItems = "center";
    banderas.style.borderBottom = "0.1rem solid #E5E5E5"; 
    banderas.style.borderTop = "0.1rem solid #E5E5E5";

    flechader.style.cursor = "pointer";
    flechader.style.marginRight = "5rem";
    flechader.style.position = "hidden";

    flechaizq.style.position = "hidden";
    flechaizq.style.color = "#AFAFAF";
    flechaizq.style.cursor = "pointer";
    flechaizq.style.marginLeft = "5rem";

});

//Style para la section 3
document.querySelectorAll("section3").forEach(function(section3) {

    section3.style.display = "flex";
    section3.style.marginLeft = "5rem";
    section3.style.marginRight = "5rem";
    section3.style.overflow = "visible";

    divi3.style.textAlign = "center";
    divi3.style.display = "flex";
    

    divi3_1.style.display = "flex";
    divi3_1.style.fontWeight = "bold";
    divi3_1.style.fontFamily = "'Feather Bold'";
    divi3_1.style.color = "#58CC02";
    divi3_1.style.textAlign = "left";
    divi3_1.style.fontSize = "2.9rem";
    divi3_1.style.marginTop = "8rem";
    divi3_1.style.marginLeft = "5rem";
    //divi3_1.style.paddingRight = "3rem";

    divi3_2.style.display = "flex";
    divi3_2.style.marginTop = "-2rem";
    divi3_2.style.marginLeft = "5rem";
    divi3_2.style.marginRight = "10rem";
    divi3_2.style.fontSize = "0.8rem";
    divi3_2.style.textAlign = "right";
    divi3_2.style.textAlign = "justify";
    divi3_2.style.color = "#777777";
    divi3_2.style.fontFamily = "'nunito'";
    divi3_2.style.fontWeight = "bold";
    
    divi3_3.style.display = "flex";
    divi3_3.style.display = "inlinebox";
    divi3_3.style.marginLeft = "2rem";
    divi3_3.style.marginTop = "5rem"
    divi3_3.style.marginRight = "4rem";
    
    modi.style.color = "#1CB0F6";
});

//Style para la section 4
document.querySelectorAll("section4").forEach(function(section4) {

    section4.style.display = "flex";
    section4.style.marginLeft = "5rem";
    section4.style.marginRight = "5rem";
    section4.style.overflow = "visible";

    divi4.style.marginTop = "4rem";

    divi4_1.style.display = "flex";
    divi4_1.style.display = "flex";
    divi4_1.style.marginLeft = "2rem";
    divi4_1.style.marginRight = "1rem";
    divi4_1.style.marginTop = "3rem";
    

    divi4.style.textAlign = "center";
    divi4.style.display = "flex";
    divi4.style.marginLeft = "3rem";
    

    divi4_2.style.display = "flex";
    divi4_2.style.fontWeight = "bold";
    divi4_2.style.fontFamily = "'Feather Bold'";
    divi4_2.style.color = "#58CC02";
    divi4_2.style.textAlign = "left";
    divi4_2.style.fontSize = "3rem";
    divi4_2.style.marginTop = "5rem";
    divi4_2.style.marginLeft = "2rem";
    divi4_2.style.marginRight = "5rem";

    divi4_3.style.display = "flex";
    divi4_3.style.marginTop = "-3rem";
    divi4_3.style.marginLeft = "2rem";
    divi4_3.style.marginRight = "10rem";
    divi4_3.style.fontSize = "0.8rem";
    divi4_3.style.textAlign = "left";
    divi4_3.style.textAlign = "justify";
    divi4_3.style.color = "#777777";
    divi4_3.style.fontFamily = "'nunito'";
    divi4_3.style.fontWeight = "bold";
    

});

//Style para la section 5
document.querySelectorAll("section5").forEach(function(section5) {

    section5.style.display = "flex";
    section5.style.marginLeft = "5rem";
    section5.style.marginRight = "5rem";
    section5.style.overflow = "visible";

    divi5.style.textAlign = "center";
    divi5.style.display = "flex";
    divi5.style.marginLeft = "1rem";
    divi5.style.marginTop = "4rem";


    divi5_1.style.display = "flex"; //Titulo
    divi5_1.style.fontWeight = "bold";
    divi5_1.style.fontFamily = "'Feather Bold'";
    divi5_1.style.color = "#58CC02";
    divi5_1.style.textAlign = "left";
    divi5_1.style.fontSize = "3rem";
    divi5_1.style.marginTop = "3.5rem";
    divi5_1.style.marginLeft = "5rem";
    divi5_1.style.marginRight = "2rem";

    divi5_2.style.display = "flex";//Parrafo
    divi5_2.style.marginTop = "-3rem";
    divi5_2.style.marginLeft = "5rem";
    divi5_2.style.marginRight = "2rem";
    divi5_2.style.fontSize = "0.9rem";
    divi5_2.style.textAlign = "left";
    divi5_2.style.textAlign = "justify";
    divi5_2.style.color = "#777777";
    divi5_2.style.fontFamily = "'nunito'";
    divi5_2.style.fontWeight = "bold";
    

    divi5_3.style.display = "flex";
    divi5_3.style.marginLeft = "5rem";
    divi5_3.style.marginRight = "1rem";
   

});

//Style para la section 6
document.querySelectorAll("section6").forEach(function(section6) {

    section6.style.display = "flex";
    section6.style.marginLeft = "5rem";
    section6.style.marginRight = "5rem";
    section6.style.overflow = "visible";

    divi6.style.textAlign = "center";
    divi6.style.display = "flex";
    divi6.style.marginTop = "6rem";

    divi6_1.style.display = "flex";
    divi6_1.style.display = "flex";
    divi6_1.style.marginRight = "1rem";

    divi6_2.style.display = "flex";//Titulo
    divi6_2.style.fontWeight = "bold";
    divi6_2.style.fontFamily = "'Feather Bold'";
    divi6_2.style.color = "#58CC02";
    divi6_2.style.textAlign = "left";
    divi6_2.style.fontSize = "3rem";
    divi6_2.style.marginTop = "3.5rem";
    divi6_2.style.marginLeft = "3rem";
    divi6_2.style.marginRight = "3rem";

    divi6_3.style.display = "flex";//Parrafo
    divi6_3.style.marginTop = "-3rem";
    divi6_3.style.marginLeft = "3rem";
    divi6_3.style.marginRight = "5rem";
    divi6_3.style.fontSize = "1rem";
    divi6_3.style.textAlign = "justify";
    divi6_3.style.color = "#777777";
    divi6_3.style.fontFamily = "'nunito'";
    divi6_3.style.fontWeight = "bold";
    

});

//Style para section 7
document.querySelectorAll("section7").forEach(function(section7) {

    section7.style.marginTop = "4rem";
    section7.style.display = "flex";
   // section7.style.overflow = "visible";
    section7.style.backgroundColor = "#DDF4FF";
    section7.style.backgroundImage = "url('https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/229d5f88cc9df2eb0b68f39466500911.svg')";
    section7.style.backgroundSize = "100%";
    section7.style.width = "100%";
    section7.style.height = "70rem";
    section7.style.margin = "0";

    divi7.style.marginLeft =  "5rem";
    divi7.style.marginRight = "5rem";

    divi7_1.style.display = "flex";
    divi7_1.style.fontSize = "4rem";
    divi7_1.style.color = "#042C60";
    divi7_1.style.textAlign = "center";
    divi7_1.style.fontFamily = "'Feather Bold'";
    divi7_1.style.marginTop = "20rem";
    divi7_1.style.marginLeft = "10rem";
    divi7_1.style.marginRight = "10rem";

    divi7_btn.style.display = "flex";

    divi7_btn1.style.display = "flex";
    divi7_btn1.style.textAlign = "center";
    divi7_btn1.style.marginLeft =  "24rem";
    divi7_btn1.style.fontSize = "0.5rem";

    divi7_btn2.style.display = "flex";
    divi7_btn2.style.textAlign = "center";
    divi7_btn2.style.marginLeft =  "2rem";
    divi7_btn2.style.marginRight = "10rem";
    divi7_btn2.style.fontSize = "0.5rem";
});

//Botones de google play Y APP STORE
document.querySelectorAll(".aprende_btn").forEach(function(aprende_btn) {
    
    aprende_btn.style.marginTop = "1rem";
    aprende_btn.style.display = "flex";
    aprende_btn.style.fontSize = "1em";
    aprende_btn.style.fontFamily = "'Feather Bold'";
    aprende_btn.style.color = "#4B4B4B";
    aprende_btn.style.textAlign = "center";
    aprende_btn.style.alignItems = "center";
    aprende_btn.style.lineHeight = "-10rem";
    aprende_btn.style.boxSizing = "border-box";
    aprende_btn.style.cursor = "pointer";
    aprende_btn.style.backgroundColor = "#ffffff";
    aprende_btn.style.borderRadius = "0.6rem";
    aprende_btn.style.borderStyle = "none";
    aprende_btn.style.width = "10rem";
    aprende_btn.style.height = "4rem";
    aprende_btn.style.boxShadow = "0.02rem 0.08rem 0rem 0.11rem #CFCFCF";

    //Se agrega la función para el color cuando se posiciona encima del btn
    aprende_btn.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#E5E5E5";
    });
    //Se agrega la función para que regrese el color 
    aprende_btn.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#ffffff";
    });
});


//Style para section 8
document.querySelectorAll("section8").forEach(function(section8) {

    section8.style.display = "flex";
    section8.style.overflow = "visible";
    section8.style.backgroundColor = "#00083A";
    section8.style.width = "100%";
    section8.style.height = "60rem";
    section8.style.margin = "0";

    divi8.style.display = "flex";
    divi8.style.marginLeft = "5rem";
    divi8.style.marginRight = "5rem";
   
    divi8_1.style.display = "flex";
    divi8_1.style.marginTop = "2rem";
    divi8_1.style.marginLeft = "1rem";
    divi8_1.style.marginTop = "15rem";
    
    divi8_text.style.textAlign = "left";
    divi8_text.style.display = "inline-block";
    divi8_text.style.marginTop = "20rem";
    divi8_text.style.marginRight = "1rem";


    divi8_btn.style.display = "flex";
    divi8_btn.style.marginTop = "-1rem";
    divi8_btn.style.marginLeft = "5rem";
});


document.querySelectorAll(".super_btn").forEach(function(super_btn) {

    super_btn.style.marginTop = "-5rem";
    super_btn.style.marginLeft = "2rem";
    super_btn.style.fontSize = "0.8rem";
    super_btn.style.fontFamily = "'Feather Bold'";
    super_btn.style.color = "#00437";
    super_btn.style.textAlign = "center";
    super_btn.style.boxSizing = "border-box";
    super_btn.style.textTransform = "uppercase";
    super_btn.style.cursor = "pointer";
    super_btn.style.backgroundColor = "#ffffff";
    super_btn.style.borderRadius = "0.7rem";
    super_btn.style.borderStyle = "none";
    super_btn.style.width = "13.9rem";
    super_btn.style.height = "2.8rem";
    super_btn.style.boxShadow = "0.02rem 0.08rem 0rem 0.11rem #CFCFCF";

    //Se agrega la función para el color cuando se posiciona encima del btn
    super_btn.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#E5E5E5";
    });
    //Se agrega la función para que regrese el color 
    super_btn.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#ffffff";
    });
});

//Style para section 9
document.querySelectorAll("section9").forEach(function(section9) {

    section9.style.display = "flex";
    section9.style.marginLeft = "5rem";
    section9.style.marginRight = "5rem";
    section9.style.overflow = "visible";

    divi9.style.marginTop = "7rem";
    divi9.style.textAlign = "center";
    divi9.style.display = "flex";
    divi9.style.marginLeft = "1rem";

    divi9_1.style.display = "flex"; //Titulo
    divi9_1.style.fontWeight = "bold";
    divi9_1.style.fontFamily = "'Feather Bold'";
    divi9_1.style.color = "#58CC02";
    divi9_1.style.textAlign = "left";
    divi9_1.style.fontSize = "3rem";
    divi9_1.style.marginTop = "3.5rem";
    divi9_1.style.marginLeft = "3rem";
    divi9_1.style.paddingRight = "3rem";

    divi9_2.style.display = "flex";//Parrafo
    divi9_2.style.marginTop = "-3rem";
    divi9_2.style.marginLeft = "3rem";
    divi9_2.style.marginRight = "9rem";
    divi9_2.style.fontSize = "0.9rem";
    divi9_2.style.textAlign = "justify";
    divi9_2.style.color = "#777777";
    divi9_2.style.fontFamily = "'nunito'";

    divi9_3.style.display = "flex"; //boton
    divi9_3.style.display = "inlinebox";
    divi9_3.style.alignItems = "center";
    divi9_3.style.marginLeft = "5rem";
    
    divi9_4.style.marginRight = "3rem";
});

//Style para section 10
document.querySelectorAll("section10").forEach(function(section10) {

    section10.style.display = "flex";
    section10.style.marginLeft = "5rem";
    section10.style.marginRight = "5rem";
    section10.style.overflow = "visible";

    divi10.style.textAlign = "center";
    divi10.style.display = "flex";
    divi10.style.marginTop = "4rem";

    divi10_1.style.display = "flex"; //Imagen
    divi10_1.style.display = "flex";
    divi10_1.style.marginLeft = "rem";
    divi10_1.style.marginRight = "5rem";
    

    divi10_2.style.display = "flex"; //Titulo
    divi10_2.style.fontWeight = "bold";
    divi10_2.style.fontFamily = "'Feather Bold'";
    divi10_2.style.color = "#58CC02";
    divi10_2.style.textAlign = "left";
    divi10_2.style.fontSize = "3.2rem";
    divi10_2.style.marginTop = "3.5rem";
    divi10_2.style.marginLeft = "1rem";
    divi10_2.style.marginRight = "3rem";

    divi10_3.style.display = "flex"; //Parrafo
    divi10_3.style.marginTop = "-4rem";
    divi10_3.style.marginLeft = "1rem";
    divi10_3.style.marginRight = "5rem";
    divi10_3.style.fontSize = "1rem";
    divi10_3.style.textAlign = "left";
    divi10_3.style.textAlign = "justify";
    divi10_3.style.color = "#777777";
    divi10_3.style.fontFamily = "'nunito'";
    
    divi10_btn.style.display = "flex";
    divi10_btn.style.marginLeft = "1rem";
});

//Style para section 11
document.querySelectorAll("section11").forEach(function(section11) {

    section11.style.display = "flex";
    section11.style.marginLeft = "5rem";
    section11.style.marginRight = "5rem";
    section11.style.overflow = "visible";

    divi11.style.textAlign = "center";
    divi11.style.display = "flex";
    divi11.style.marginTop = "8rem";

    divi11_1.style.display = "flex";//Titulo
    divi11_1.style.fontWeight = "bold";
    divi11_1.style.fontFamily = "'Feather Bold'";
    divi11_1.style.color = "#58CC02";
    divi11_1.style.textAlign = "left";
    divi11_1.style.fontSize = "3.5rem";
    divi11_1.style.marginTop = "1rem";
    divi11_1.style.marginLeft = "3rem";
    divi11_1.style.marginsgRight = "3rem";

    divi11_2.style.display = "flex"; //Parrafo
    divi11_2.style.marginTop = "-3rem";
    divi11_2.style.marginLeft = "3rem";
    divi11_2.style.marginRight = "3rem";
    divi11_2.style.fontSize = "0.9rem";
    divi11_2.style.textAlign = "left";
    divi11_2.style.textAlign = "justify";
    divi11_2.style.color = "#777777";
    divi11_2.style.fontFamily = "'nunito'";

    divi11_btn.style.display = "flex";
    divi11_btn.style.marginLeft = "3rem";
    
    divi11_3.style.display = "flex"; //Foto
    divi11_3.style.display = "inlinebox";
    divi11_3.style.marginTop = "3.5rem";
    divi11_3.style.marginLeft = "15rem";

});

//Style para section 12
document.querySelectorAll("section12").forEach(function(section12) {

    section12.style.display = "flex";
    section12.style.marginLeft = "5rem";
    section12.style.marginRight = "5rem";
    section12.style.overflow = "visible";

    divi12.style.textAlign = "center";
    divi12.style.display = "flex";
    divi12.style.marginTop = "10rem";

    divi12_1.style.display = "flex"; //Imagen
    divi12_1.style.marginRight = "2rem";
    divi12_1.style.marginLeft = "3rem";

    divi12_2.style.display = "flex"; //Titulo
    divi12_2.style.fontWeight = "bold";
    divi12_2.style.fontFamily = "'Feather Bold'";
    divi12_2.style.color = "#58CC02";
    divi12_2.style.textAlign = "left";
    divi12_2.style.fontSize = "3rem";
    divi12_2.style.marginTop = "3.5rem";
    divi12_2.style.marginLeft = "1rem";
    divi12_2.style.marginRight = "3rem";

    divi12_3.style.display = "flex"; //Parrafo
    divi12_3.style.marginTop = "-3rem";
    divi12_3.style.marginLeft = "1rem";
    divi12_3.style.marginRight = "7rem";
    divi12_3.style.fontSize = "0.9rem";
    divi12_3.style.textAlign = "left";
    divi12_3.style.textAlign = "justify";
    divi12_3.style.color = "#777777";
    divi12_3.style.fontFamily = "'nunito'";

    divi12_btn.style.display = "flex";
    divi12_btn.style.marginLeft = "1rem";

});

//Style para section 13
document.querySelectorAll("section13").forEach(function(section13) {

    section13.style.marginTop = "4rem";
    section13.style.display = "flex";
    section13.style.overflow = "visible";
    section13.style.padding = "0"; 
    section13.style.margin = "0";
    section13.style.backgroundImage = "url('https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/890eb76de9a395b182c1c28322721405.svg')";
    section13.style.backgroundRepeat = "no-repeat";
    section13.style.backgroundSize = "cover";
    section13.style.height = "41rem";
    //section13.style.border = "solid";
    section13.style.outline = "none";
    //section13.style.borderColor = "red";
    section13.style.marginTop = "14rem";
    
    divi13.style.marginTop = "rem";
    divi13.style.fontSize = "4rem";
    divi13.style.color = "#58CC02";
    divi13.style.textAlign = "center";
    divi13.style.fontFamily = "'Feather Bold'";
    divi13.style.marginLeft = "24rem";

    divi13_1.style.marginTop = "-4rem";
    divi13_1.style.fontSize = "4rem";
    divi13_1.style.display = "flex";

    divi13_btn.style.marginTop = "-1.9rem";
    divi13_btn.style.display ="flex";
    divi13_btn.style.marginLeft = "5.5rem";

    divi13_btn1.style.display = "flex";
    divi13_btn1.style.marginLeft = "1rem";

});

//Style para el footer
document.querySelectorAll("footer").forEach(function(footer){
    
    footer.style.backgroundColor = "#58CC02";
    footer.style.display = "flex";
    footer.style.justifyContent = "space-around";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.style.borderStyle = "none";

    divif_text.style.flexDirection = "column";
    divif_text.style.justifyContent = "space-around";
    divif_text.style.width = "100%";
    divif_text.style.display = "flex";
    
    divif_1.style.flexWrap = "wrap";
    divif_1.style.display = "flex";
    divif_1.style.justifyContent = "space-around";
    divif_1.style.marginTop = "10rem";
    divif_1.style.marginLeft = "5rem";
    divif_1.style.marginRight = "10rem";

    divif_2.style.flexWrap = "wrap";
    divif_2.style.marginTop = "1rem";
    divif_2.style.marginLeft = "2rem";
    divif_2.style.marginRight = "2rem";
    
    divif_3.style.marginBottom = "4rem";
    divif_3.style.marginLeft = "3rem";

    divif_2.style.borderTop = "2px solid #A5ED6E";
    divif_2.style.borderLeft = "none"; 
    divif_2.style.borderRight = "none"; 
    divif_2.style.borderBottom = "none";
    divif_2.style.width = "95%";
});

divif_1.querySelectorAll("ul").forEach(function(ul) {
    ul.style.listStyle = "none";
    ul.style.fontFamily = "nunito";
    ul.style.fontWeight = "bold";
    ul.style.color = "#A5ED6E";
});

divif_1.querySelectorAll("h3").forEach(function(h3){
    h3.style.color = '#D7FFB8';
    h3.style.fontSize = "1.2rem";

});

divif_1.querySelectorAll("li").forEach(function(li){
    li.style.marginBottom = "0.4rem";
    li.style.fontSize = "0.9rem";
});

divif_3.querySelectorAll("ul").forEach(function(ul) {
    ul.style.listStyle = "none";
    ul.style.fontFamily = "nunito";
    ul.style.fontWeight = "bold";
    ul.style.color = "#A5ED6E";
});

divif_2.querySelectorAll("h3").forEach(function(h3){
    h3.style.color = '#D7FFB8';
    h3.style.fontSize = "1rem";
    h3.style.display = "flex";
    h3.style.textAlign = "left";

});

divif_3.querySelectorAll("li").forEach(function(li){
    li.style.marginBottom = "0.4rem";
    li.style.marginLeft = "1.5rem";
    li.style.fontSize = "0.8rem";
    li.style.display = "inline-block"
});

