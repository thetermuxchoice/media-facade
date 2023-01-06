//Burguer menu

const menuMovile = document.getElementById("boton_menu")
const navMenu = document.getElementById("burger-links")

menuMovile.addEventListener( "click", () => {
    navMenu.classList.toggle("nav-links__visibility")
});