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


//Style para el navbar
document.querySelectorAll("navbar").forEach(function(navbar){
    
    navbar.style.justifyContent = "spaceround";
    navbar.style.position = "fixed";
    navbar.style.display = "flex";
    navbar.style.top = "0";
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
    section.style.marginTop = "2.6rem";

    divi2.style.textAlign = "center";
    divi2.style.marginLeft = "2.5rem";

    divi2_1.style.fontFamily = "'nunito'";
    divi2_1.style.color = "#4B4B4B";
    divi2_1.style.textAlign = "left";
    divi2_1.style.fontSize = "1.2rem";
    divi2_1.style.marginTop = "9.2rem";
    divi2_1.style.paddingLeft = "3rem";
    divi2_1.style.paddingRight = "2rem";

    divi2_2.style.marginTop = "3.1rem";
    divi2_2.style.marginLeft = "2rem";

    divi2_3.style.marginLeft = "2rem";
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
    banderas.style.fontFamily = "nunito";
    banderas.style.fontWeight = "bold";
    banderas.style.textDecoration = "none"; 
    banderas.style.width = "67.7rem";
    banderas.style.height = "5rem";
    banderas.style.position = "relative";

    flechader.style.color  = "#AFAFAF";
    flechader.style.cursor = "pointer";
    flechaizq.style.color = "#AFAFAF";
    flechaizq.style.cursor = "pointer";

});

//Style para la section 3
document.querySelectorAll("section3").forEach(function(section3) {

    section3.style.borderStyle = "double";
    section3.style.display = "flex";
    section3.style.marginLeft = "5rem";
    section3.style.marginRight = "5rem";
    section3.style.overflow = "visible";

    divi3.style.textAlign = "center";
    divi3.style.display = "flex";
    divi3.style.marginLeft = "1rem";
    divi3.style.borderStyle = "double";
    divi3.style.borderColor = "red";

    divi3_1.style.display = "flex";
    divi3_1.style.fontWeight = "bold";
    divi3_1.style.fontFamily = "'Feather Bold'";
    divi3_1.style.color = "#58CC02";
    divi3_1.style.textAlign = "left";
    divi3_1.style.fontSize = "3.5rem";
    divi3_1.style.marginTop = "3.5rem";
    divi3_1.style.marginLeft = "3rem";
    divi3_1.style.paddingRight = "3rem";

    divi3_2.style.display = "flex";
    divi3_2.style.marginTop = "-4rem";
    divi3_2.style.marginLeft = "3rem";
    divi3_2.style.marginRight = "9rem";
    divi3_2.style.fontSize = "1.2rem";
    divi3_2.style.textAlign = "left";
    divi3_2.style.textAlign = "justify";
    divi3_2.style.color = "#777777";
    divi3_2.style.fontFamily = "'nunito'";
    divi3_2.style.fontWeight = "bold";
    divi3_2.style.borderStyle = "solid";
    divi3_2.style.borderColor = "pink";

    divi3_3.style.display = "flex";
    divi3_3.style.display = "inlinebox";
    divi3_3.style.marginLeft = "8rem";
    divi3_3.style.marginRight = "8rem";
    divi3_3.style.borderStyle = "solid";
    divi3_3.style.borderColor = "yellow";

    modi.style.color = "#1CB0F6";
});

//Style para la section 4
document.querySelectorAll("section4").forEach(function(section4) {

    section4.style.borderStyle = "double";
    section4.style.display = "flex";
    section4.style.marginLeft = "5rem";
    section4.style.marginRight = "5rem";
    section4.style.overflow = "visible";

    divi4_1.style.display = "flex";
    divi4_1.style.display = "flex";
    divi4_1.style.marginLeft = "8rem";
    divi4_1.style.marginRight = "8rem";
    divi4_1.style.borderStyle = "solid";
    divi4_1.style.borderColor = "yellow";

    divi4.style.textAlign = "center";
    divi4.style.display = "flex";
    divi4.style.marginLeft = "2rem";
    divi4.style.borderStyle = "double";
    divi4.style.borderColor = "orange";

    divi4_2.style.display = "flex";
    divi4_2.style.fontWeight = "bold";
    divi4_2.style.fontFamily = "'Feather Bold'";
    divi4_2.style.color = "#58CC02";
    divi4_2.style.textAlign = "left";
    divi4_2.style.fontSize = "3.2rem";
    divi4_2.style.marginTop = "3.5rem";
    divi4_2.style.marginLeft = "12.5rem";
    divi4_2.style.paddingRight = "3rem";

    divi4_3.style.display = "flex";
    divi4_3.style.marginTop = "-4rem";
    divi4_3.style.marginLeft = "12.5rem";
    divi4_3.style.marginRight = "5rem";
    divi4_3.style.fontSize = "0.9rem";
    divi4_3.style.textAlign = "left";
    divi4_3.style.textAlign = "justify";
    divi4_3.style.color = "#777777";
    divi4_3.style.fontFamily = "'nunito'";
    divi4_3.style.fontWeight = "bold";
    divi4_3.style.borderStyle = "solid";
    divi4_3.style.borderColor = "pink";

});

//Style para la section 5
document.querySelectorAll("section5").forEach(function(section5) {

    section5.style.borderStyle = "double";
    section5.style.display = "flex";
    section5.style.marginLeft = "5rem";
    section5.style.marginRight = "5rem";
    section5.style.overflow = "visible";

    divi5.style.textAlign = "center";
    divi5.style.display = "flex";
    divi5.style.marginLeft = "1rem";
    divi5.style.borderStyle = "double";
    divi5.style.borderColor = "red";

    divi5_1.style.display = "flex";
    divi5_1.style.fontWeight = "bold";
    divi5_1.style.fontFamily = "'Feather Bold'";
    divi5_1.style.color = "#58CC02";
    divi5_1.style.textAlign = "left";
    divi5_1.style.fontSize = "3.5rem";
    divi5_1.style.marginTop = "3.5rem";
    divi5_1.style.marginLeft = "3rem";
    divi5_1.style.paddingRight = "3rem";

    divi5_2.style.display = "flex";
    divi5_2.style.marginTop = "-4rem";
    divi5_2.style.marginLeft = "3rem";
    divi5_2.style.marginRight = "9rem";
    divi5_2.style.fontSize = "1.2rem";
    divi5_2.style.textAlign = "left";
    divi5_2.style.textAlign = "justify";
    divi5_2.style.color = "#777777";
    divi5_2.style.fontFamily = "'nunito'";
    divi5_2.style.fontWeight = "bold";
    divi5_2.style.borderStyle = "solid";
    divi5_2.style.borderColor = "pink";

    divi5_3.style.display = "flex";
    divi5_3.style.display = "inlinebox";
    divi5_3.style.marginLeft = "8rem";
    divi5_3.style.marginRight = "8rem";
    divi5_3.style.borderStyle = "solid";
    divi5_3.style.borderColor = "yellow";

});

//Style para la section 6
document.querySelectorAll("section6").forEach(function(section6) {

    section6.style.borderStyle = "double";
    section6.style.display = "flex";
    section6.style.marginLeft = "5rem";
    section6.style.marginRight = "5rem";
    section6.style.overflow = "visible";

    divi6_1.style.display = "flex";
    divi6_1.style.display = "flex";
    divi6_1.style.marginLeft = "8rem";
    divi6_1.style.marginRight = "8rem";
    divi6_1.style.borderStyle = "solid";
    divi6_1.style.borderColor = "yellow";

    divi6.style.textAlign = "center";
    divi6.style.display = "flex";
    divi6.style.marginLeft = "2rem";
    divi6.style.borderStyle = "double";
    divi6.style.borderColor = "orange";

    divi6_2.style.display = "flex";
    divi6_2.style.fontWeight = "bold";
    divi6_2.style.fontFamily = "'Feather Bold'";
    divi6_2.style.color = "#58CC02";
    divi6_2.style.textAlign = "left";
    divi6_2.style.fontSize = "3.2rem";
    divi6_2.style.marginTop = "3.5rem";
    divi6_2.style.marginLeft = "12.5rem";
    divi6_2.style.paddingRight = "3rem";

    divi6_3.style.display = "flex";
    divi6_3.style.marginTop = "-4rem";
    divi6_3.style.marginLeft = "12.5rem";
    divi6_3.style.marginRight = "5rem";
    divi6_3.style.fontSize = "0.9rem";
    divi6_3.style.textAlign = "left";
    divi6_3.style.textAlign = "justify";
    divi6_3.style.color = "#777777";
    divi6_3.style.fontFamily = "'nunito'";
    divi6_3.style.fontWeight = "bold";
    divi6_3.style.borderStyle = "solid";
    divi6_3.style.borderColor = "pink";

});

//Style para section 7
document.querySelectorAll("section7").forEach(function(section7) {

    section7.style.display = "flex";
    section7.style.overflow = "visible";
    section7.style.backgroundColor = "#DDF4FF";
    section7.style.padding = 0; 
    section7.style.margin =  0;

    divi7.style.marginLeft =  "10rem";
    divi7.style.borderColor = "red"
    divi7.style.borderStyle = "solid";
    divi7.style.marginRight = "10rem";

    divi7_1.style.display = "flex";
    divi7_1.style.fontSize = "4rem";
    divi7_1.style.color = "#042C60";
    divi7_1.style.textAlign = "center";
    divi7_1.style.fontFamily = "'Feather Bold'";
    divi7_1.style.marginLeft = "7rem";
    divi7_1.style.marginRight = "7rem";

    divi7_btn.style.borderStyle = "solid";
    divi7_btn.style.borderColor = "red";
    divi7_btn.style.display = "flex";
    divi7_btn.style.textAlign = "center";
    divi7_btn.style.marginLeft =  "10rem";
    divi7_btn.style.marginRight = "10rem";
    

});

//Style para section 8
document.querySelectorAll("section8").forEach(function(section8) {

    section8.style.borderStyle = "double";
    section8.style.display = "flex";
    section8.style.overflow = "visible";
    section8.style.backgroundColor = "#100F3E";

    divi8_1.style.display = "flex";
    divi8_1.style.marginLeft = "8rem";
    divi8_1.style.marginRight = "5rem";
    divi8_1.style.borderStyle = "solid";
    divi8_1.style.borderColor = "yellow";

    divi8.style.textAlign = "center";
    divi8.style.display = "flex";
    divi8.style.marginLeft = "10rem";
    divi8.style.marginRight = "50rem";
    divi8.style.borderStyle = "double";
    divi8.style.borderColor = "orange";

    divi8_text.style.borderStyle = "solid";
    divi8_text.style.borderColor = "pink";
    divi8_text.style.display = "flex";
    divi8_text.style.marginTop = "10rem";
    divi8_text.style.marginLeft =  "16.5rem";
    divi8_text.style.marginRight = "1rem";
});

//Style para section 9
document.querySelectorAll("section9").forEach(function(section9) {

    section9.style.borderStyle = "double";
    section9.style.display = "flex";
    section9.style.marginLeft = "5rem";
    section9.style.marginRight = "5rem";
    section9.style.overflow = "visible";

    divi9.style.textAlign = "center";
    divi9.style.display = "flex";
    divi9.style.marginLeft = "1rem";
    divi9.style.borderStyle = "double";
    divi9.style.borderColor = "red";

    divi9_1.style.display = "flex";
    divi9_1.style.fontWeight = "bold";
    divi9_1.style.fontFamily = "'Feather Bold'";
    divi9_1.style.color = "#58CC02";
    divi9_1.style.textAlign = "left";
    divi9_1.style.fontSize = "3.5rem";
    divi9_1.style.marginTop = "3.5rem";
    divi9_1.style.marginLeft = "3rem";
    divi9_1.style.paddingRight = "3rem";

    divi9_2.style.display = "flex";
    divi9_2.style.marginTop = "-4rem";
    divi9_2.style.marginLeft = "3rem";
    divi9_2.style.marginRight = "9rem";
    divi9_2.style.fontSize = "1.2rem";
    divi9_2.style.textAlign = "left";
    divi9_2.style.textAlign = "justify";
    divi9_2.style.color = "#777777";
    divi9_2.style.fontFamily = "'nunito'";
    divi9_2.style.fontWeight = "bold";
    divi9_2.style.borderStyle = "solid";
    divi9_2.style.borderColor = "pink";

    divi9_3.style.display = "flex";
    divi9_3.style.display = "inlinebox";
    divi9_3.style.marginLeft = "3rem";
    divi9_3.style.marginRight = "9rem";
    divi9_3.style.borderStyle = "solid";
    divi9_3.style.borderColor = "yellow";

    divi9_4.style.borderColor = "purple";
    divi9_4.style.borderStyle = "solid";
});

//Style para section 10
document.querySelectorAll("section10").forEach(function(section10) {

    section10.style.borderStyle = "double";
    section10.style.display = "flex";
    section10.style.marginLeft = "5rem";
    section10.style.marginRight = "5rem";
    section10.style.overflow = "visible";

    divi10.style.textAlign = "center";
    divi10.style.display = "flex";
    divi10.style.marginLeft = "2rem";
    divi10.style.borderStyle = "double";
    divi10.style.borderColor = "orange";

    divi10_1.style.display = "flex";
    divi10_1.style.display = "flex";
    divi10_1.style.marginLeft = "8rem";
    divi10_1.style.marginRight = "8rem";
    divi10_1.style.borderStyle = "solid";
    divi10_1.style.borderColor = "yellow";

    divi10_2.style.display = "flex";
    divi10_2.style.fontWeight = "bold";
    divi10_2.style.fontFamily = "'Feather Bold'";
    divi10_2.style.color = "#58CC02";
    divi10_2.style.textAlign = "left";
    divi10_2.style.fontSize = "3.2rem";
    divi10_2.style.marginTop = "3.5rem";
    divi10_2.style.marginLeft = "12.5rem";
    divi10_2.style.paddingRight = "3rem";

    divi10_3.style.display = "flex";
    divi10_3.style.marginTop = "-4rem";
    divi10_3.style.marginLeft = "12.5rem";
    divi10_3.style.marginRight = "5rem";
    divi10_3.style.fontSize = "0.9rem";
    divi10_3.style.textAlign = "left";
    divi10_3.style.textAlign = "justify";
    divi10_3.style.color = "#777777";
    divi10_3.style.fontFamily = "'nunito'";
    divi10_3.style.fontWeight = "bold";
    divi10_3.style.borderStyle = "solid";
    divi10_3.style.borderColor = "pink";

});

//Style para section 11
document.querySelectorAll("section11").forEach(function(section11) {

    section11.style.borderStyle = "double";
    section11.style.display = "flex";
    section11.style.marginLeft = "5rem";
    section11.style.marginRight = "5rem";
    section11.style.overflow = "visible";

    divi11.style.textAlign = "center";
    divi11.style.display = "flex";
    divi11.style.marginLeft = "1rem";
    divi11.style.borderStyle = "double";
    divi11.style.borderColor = "red";

    divi11_1.style.display = "flex";
    divi11_1.style.fontWeight = "bold";
    divi11_1.style.fontFamily = "'Feather Bold'";
    divi11_1.style.color = "#58CC02";
    divi11_1.style.textAlign = "left";
    divi11_1.style.fontSize = "3.5rem";
    divi11_1.style.marginTop = "3.5rem";
    divi11_1.style.marginLeft = "3rem";
    divi11_1.style.paddingRight = "3rem";11
    divi11_2.style.display = "flex";
    divi11_2.style.marginTop = "-4rem";
    divi11_2.style.marginLeft = "3rem";
    divi11_2.style.marginRight = "9rem";
    divi11_2.style.fontSize = "1.2rem";
    divi11_2.style.textAlign = "left";
    divi11_2.style.textAlign = "justify";
    divi11_2.style.color = "#777777";
    divi11_2.style.fontFamily = "'nunito'";
    divi11_2.style.fontWeight = "bold";
    divi11_2.style.borderStyle = "solid";
    divi11_2.style.borderColor = "pink";

    divi11_3.style.display = "flex";
    divi11_3.style.display = "inlinebox";
    divi11_3.style.marginLeft = "8rem";
    divi11_3.style.marginRight = "8rem";
    divi11_3.style.borderStyle = "solid";
    divi11_3.style.borderColor = "yellow";

});

//Style para section 12
document.querySelectorAll("section12").forEach(function(section12) {

    section12.style.borderStyle = "double";
    section12.style.display = "flex";
    section12.style.marginLeft = "5rem";
    section12.style.marginRight = "5rem";
    section12.style.overflow = "visible";

    divi12.style.textAlign = "center";
    divi12.style.display = "flex";
    divi12.style.marginLeft = "2rem";
    divi12.style.borderStyle = "double";
    divi12.style.borderColor = "orange";

    divi12_1.style.display = "flex";
    divi12_1.style.display = "flex";
    divi12_1.style.marginLeft = "8rem";
    divi12_1.style.marginRight = "8rem";
    divi12_1.style.borderStyle = "solid";
    divi12_1.style.borderColor = "yellow";

    divi12_2.style.display = "flex";
    divi12_2.style.fontWeight = "bold";
    divi12_2.style.fontFamily = "'Feather Bold'";
    divi12_2.style.color = "#58CC02";
    divi12_2.style.textAlign = "left";
    divi12_2.style.fontSize = "3.2rem";
    divi12_2.style.marginTop = "3.5rem";
    divi12_2.style.marginLeft = "12.5rem";
    divi12_2.style.paddingRight = "3rem";

    divi12_3.style.display = "flex";
    divi12_3.style.marginTop = "-4rem";
    divi12_3.style.marginLeft = "12.5rem";
    divi12_3.style.marginRight = "5rem";
    divi12_3.style.fontSize = "0.9rem";
    divi12_3.style.textAlign = "left";
    divi12_3.style.textAlign = "justify";
    divi12_3.style.color = "#777777";
    divi12_3.style.fontFamily = "'nunito'";
    divi12_3.style.fontWeight = "bold";
    divi12_3.style.borderStyle = "solid";
    divi12_3.style.borderColor = "pink";

});