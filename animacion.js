
//Funcion que permite aparecer y desaparecer al navbar
let ubicacionPrincipal = window.scrollY;
let $navbar = document.querySelector("navbar");

window.addEventListener("scroll", function(){
    let ubicacionActual = window.scrollY;
    if( ubicacionActual >= 2500 && ubicacionActual <= 4800){
        $navbar.style.top = "-80px";

    } else if (ubicacionActual == 0){
        //Si el scroll esta en cero vuelve a su style original
        nav2.innerHTML = '<p id = "idioma" style = textDecoration = "none"> IDIOMA DE LA PÁGINA: ESPAÑOL <img style = "width: 1rem ; height: 0.8rem;" src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg"></p>';
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
        nav2.style.boxSizing = "none";
        nav2.style.textTransform = "uppercase";
        nav2.style.cursor = "pointer";
        nav2.style.backgroundColor = "white";
        nav2.style.borderRadius = "0.6rem";
        nav2.style.borderStyle = "none";
        nav2.style.width = "20.7rem";
        nav2.style.height = "2.6rem";
        navbar.style.borderBottom = "0 solid transparent";
        nav2.style.boxShadow = "0.01rem 0.3rem white";
        //Se agrega la función para el color cuando se posiciona encima del btn
        nav2.addEventListener("mouseover", function(){
            this.style.backgroundColor = "white";
        });
        //Se agrega la función para que regrese el color 
        nav2.addEventListener("mouseout", function() {
            this.style.backgroundColor = "white";
        });

    } else {
        //si no se encuentra en los px marcados se asigna un boton a su style
        $navbar.style.top = "0px"; 
        navbar.style.borderBlockStyle = "solid";
        navbar.style.borderColor = "#E5E5E5";
        nav2.innerHTML = '<a>EMPIEZA AHORA</a>';
        nav2.style.textAlign = "center";
        nav2.style.fontSize = "0.9rem";
        nav2.style.fontFamily = "'Feather Bold'";
        nav2.style.color = "#ffff";
        nav2.style.boxSizing = "border-box";
        nav2.style.textTransform = "uppercase";
        nav2.style.cursor = "pointer";
        nav2.style.backgroundColor = "#58CC02";
        nav2.style.borderRadius = "0.6rem";
        nav2.style.borderStyle = "none";
        nav2.style.width = "9.5rem";
        nav2.style.height = "2.6rem";
        nav2.style.boxShadow = "0.1rem 0.2rem #61B800";

        //Se agrega la función para el color cuando se posiciona encima del btn
        nav2.addEventListener("mouseover", function(){
            this.style.backgroundColor = "#61E002";
        });
        //Se agrega la función para que regrese el color 
        nav2.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#58CC02";
        });
        //Efecto del botón
        document.getElementById("nav2").addEventListener("click", function() {
            var boton = this;
            boton.style.transform = "translateY(4px)"; // Hundimiento al hacer click
              setTimeout(function() {
              boton.style.transform = "none"; }, 400 //Espera para volver a su estilo
              );
          });

    ubicacionPrincipal = ubicacionActual;
    }
});

//Funcion de las banderas
//window.addEventListener('load', function(){
   // new Glider(this.document.querySelector(".carrusel"));
//});

document.getElementById("divi2_2").addEventListener("click", function() {
    var boton = this;
    boton.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
  });

document.getElementById("divi2_3").addEventListener("click", function() {
    var boton6 = this;
    boton6.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton6.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
  });

document.getElementById("divi2_3").addEventListener("click", function() {
    var boton = this;
    boton.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
  });

document.getElementById("divi8_btn").addEventListener("click", function() {
    var boton9 = this;
    boton9.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton9.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi9_3").addEventListener("click", function() {
    var boton1 = this;
    boton1.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton1.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi10_btn").addEventListener("click", function() {
    var boton2 = this;
    boton2.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton2.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi11_btn").addEventListener("click", function() {
    var boton3 = this;
    boton3.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton3.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi12_btn").addEventListener("click", function() {
    var boton5 = this;
    boton5.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton5.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi13_btn").addEventListener("click", function() {
    var boton7 = this;
    boton7.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton7.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi7_btn1").addEventListener("click", function() {
    var boton9 = this;
    boton9.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton9.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

document.getElementById("divi7_btn2").addEventListener("click", function() {
    var boton9 = this;
    boton9.style.transform = "translateY(4px)"; // Hundimiento al hacer click
      setTimeout(function() {
      boton9.style.transform = "none"; }, 400 //Espera para volver a su estilo
      );
});

