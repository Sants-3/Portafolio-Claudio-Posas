let menuMostrado = false;

function mostarYOcultarMenu(){
    if(menuMostrado){
        document.querySelector('nav').classList = "";
        menuMostrado = false;
    }else{
        document.querySelector('nav').classList = "bar-nav-responsive";
        menuMostrado = true;
    }
}

//funcion que oculta la barra de opciones una ves seleccionada una
function seleccionarOpcion() {
    document.querySelector('nav').classList = "";
    menuMostrado = false;
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let skills = document.getElementsByClassName('progreso');
        skills[0].classList.add("html");
        skills[1].classList.add("javascript");
        skills[2].classList.add("css");
        skills[3].classList.add("php");
        skills[4].classList.add("python");
        skills[5].classList.add("java");
        skills[6].classList.add("comunicacion");
        skills[7].classList.add("trabajo-equipo");
        skills[8].classList.add("creatividad");
        skills[9].classList.add("dedicacion");
        skills[10].classList.add("creacion-proyectos");
        skills[11].classList.add("deteccion-errores");
    }

}