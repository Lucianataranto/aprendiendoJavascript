
let opinionForm = document.querySelectorAll(".card-text")

console.log (opinionForm)

for (let boton of opinionForm) {

    function eventoOpinion (e) {
        e.preventDefault();
        boton.addEventListener("submit", enviarOpinion)
}}

let opiniones = []

 function enviarOpinion (e) {
    console.log (e.target)
    let opinionInput = document.querySelectorAll(".input")
    let opinion = opinionInput.value;
    opiniones.push(opinion);
    console.log(opiniones)
    let opiniones1 = JSON.stringify(opiniones);
    localStorage.setItem("opinionGuardada", opiniones1);
 }