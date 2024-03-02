
//Funcion que permite aparecer y desaparecer al navbar
let ubicacionPrincipal = window.scrollY;
let $navbar = document.querySelector("navbar");

window.addEventListener("scroll", function(){
    let ubicacionActual = window.scrollY;
    if( ubicacionActual >= 2000 && ubicacionActual <= 3100){
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
        nav2.className = "";
        nav2.style.boxSizing = "none";
        nav2.style.textTransform = "uppercase";
        nav2.style.cursor = "pointer";
        nav2.style.backgroundColor = "white";
        nav2.style.borderRadius = "0.6rem";
        nav2.style.borderStyle = "none";
        nav2.style.width = "20.7rem";
        nav2.style.height = "2.6rem";
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

    ubicacionPrincipal = ubicacionActual;
    }
});

