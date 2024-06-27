(() => {
    let hero = document.querySelector(".hero");
    let hamburguesa = document.querySelector("#hamburguesa");

    hamburguesa.addEventListener("click", () => {
        hero.classList.toggle("cerrado"); 
    });
})();

(() => {
    let navbar = document.querySelector("#navbar");
    let postNavbar = document.querySelector(".post-navbar");
    let alturaNavbar = navbar.getBoundingClientRect().height;
    let breakpoint = postNavbar.offsetTop - alturaNavbar;
    let posicion;
    let navbarFijado = false;

    const cambioEnPosicion = () => {
        posicion = window.scrollY;
    }

    const onScroll = () => {
        cambioEnPosicion();

        if(posicion >= breakpoint && !navbarFijado){
            navbar.classList.add('navbar-fixed');
            postNavbar.style.cssText = "margin-top: " + alturaNavbar + 'px;';
            navbarFijado = true;
        } else if (posicion < breakpoint && navbarFijado){
            navbar.classList.remove('navbar-fixed');
            postNavbar.style.cssText = "margin-top: " + 0 +'px;';
            navbarFijado = false;
        }
    }

    document.addEventListener('scroll', onScroll);

    // Función para marcar el elemento activo en el menú
    const marcarElementoActivo = () => {
        const urlActual = window.location.href;
        const enlacesMenu = document.querySelectorAll('#navbar ul li a');

        enlacesMenu.forEach(enlace => {
            if (enlace.href === urlActual) {
                enlace.parentElement.classList.add('active');
            } else {
                enlace.parentElement.classList.remove('active');
            }
        });
    }

    // Llamar a la función para marcar el elemento activo al cargar y al cambiar de página
    marcarElementoActivo();
    document.addEventListener('DOMContentLoaded', marcarElementoActivo);
})();


















