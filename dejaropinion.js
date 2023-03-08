let opiniones = document.getElementById("boton_enviar")

opiniones.addEventListener("click", function(){
    
    let opinion_input = document.getElementById("opinion_input")

    console.log (opinion_input)

})

let opinionGuardada = localStorage.setItem ("opinionGuardada", JSON.stringify(opiniones))
    console.log (opinionGuardada)