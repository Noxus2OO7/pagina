const Boton = document.getElementById("boton")
const headerContenedor = document.getElementById("header")
const menu2 = document.getElementById("a")

Boton.addEventListener("click", () => {
    headerContenedor.classList.toggle("menu")
    menu2.classList.toggle("column")
})