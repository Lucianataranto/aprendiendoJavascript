// OPINION PARA FORM 1

let opiniones = document.getElementById("boton_enviar")

opiniones.addEventListener("submit", (e) => {

    e.preventDefault()
    
    let opinion_input = document.getElementById("opinion_input").value

    console.log (opinion_input)

})

let opinionGuardada = localStorage.setItem ("opinionGuardada", JSON.stringify(opiniones))
    console.log (opinionGuardada)

// OPINION PARA FORM 2

let opiniones1 = document.getElementById("boton_enviar-1")

opiniones1.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input1 = document.getElementById("opinion_input-1").value

    console.log (opinion_input1)

})

let opinionGuardada1 = localStorage.setItem ("opinionGuardada1", JSON.stringify(opiniones1))
    console.log (opinionGuardada1)

// OPINION PARA FORM 3

let opiniones2 = document.getElementById("boton_enviar-2")

opiniones2.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input2 = document.getElementById("opinion_input-2").value

    console.log (opinion_input2)

})

let opinionGuardada2 = localStorage.setItem ("opinionGuardada2", JSON.stringify(opiniones2))
    console.log (opinionGuardada2)

// OPINION PARA FORM 4

let opiniones3 = document.getElementById("boton_enviar-3")

opiniones3.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input3 = document.getElementById("opinion_input-3").value

    console.log (opinion_input3)

})

let opinionGuardada3 = localStorage.setItem ("opinionGuardada3", JSON.stringify(opiniones3))
    console.log (opinionGuardada3)

// OPINION PARA FORM 5

let opiniones4 = document.getElementById("boton_enviar-4")

opiniones4.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input4 = document.getElementById("opinion_input-4").value

    console.log (opinion_input4)

})

let opinionGuardada4 = localStorage.setItem ("opinionGuardada4", JSON.stringify(opiniones4))
    console.log (opinionGuardada4)

// OPINION PARA FORM 6

let opiniones5 = document.getElementById("boton_enviar-5")

opiniones5.addEventListener("submit", (e) => {

    e.preventDefault()
    
    let opinion_input5 = document.getElementById("opinion_input-5").value

    console.log (opinion_input5)

})

let opinionGuardada5 = localStorage.setItem ("opinionGuardada5", JSON.stringify(opiniones5))
    console.log (opinionGuardada5)