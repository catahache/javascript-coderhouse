let spanColors = document.querySelectorAll(".colors-producto > span");

spanColors.forEach((
    span //recorro todos los spans dentro de una clase colors-producto
) =>
    span.addEventListener("click", (e) => {
        let padre = e.target.parentNode; //refiero al padre al que pertenece el span clickeado (e) (sino me trae todos los spans de todos los elems que tengan la clase colors-producto)
        let spanHijos = padre.querySelectorAll("span"); //array
        spanHijos.forEach((span) => span.classList.remove("active")); //recorro array y quito el active
        span.classList.add("active"); //añado active al color elegido
    })
);
