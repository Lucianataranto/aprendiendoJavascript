// OPINION PARA FORM 1

let arrayOpiniones = [];

let opiniones = document.getElementById("boton_enviar")

opiniones.addEventListener("submit", (e) => {

    e.preventDefault()
    
    let opinion_input = document.getElementById("opinion_input").value

    arrayOpiniones.push(opinion_input)

    console.log (arrayOpiniones)

    localStorage.setItem ("opinionGuardada", JSON.stringify(arrayOpiniones))

})


// OPINION PARA FORM 2

let arrayOpiniones1 = [];

let opiniones1 = document.getElementById("boton_enviar-1")

opiniones1.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input1 = document.getElementById("opinion_input-1").value

    arrayOpiniones1.push(opinion_input1)

    console.log (arrayOpiniones1)

    localStorage.setItem ("opinionGuardada1", JSON.stringify(arrayOpiniones1))

})


// OPINION PARA FORM 3

let arrayOpiniones2 = [];

let opiniones2 = document.getElementById("boton_enviar-2")

opiniones2.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input2 = document.getElementById("opinion_input-2").value

    arrayOpiniones2.push(opinion_input2)

    console.log (arrayOpiniones2)

    localStorage.setItem ("opinionGuardada2", JSON.stringify(arrayOpiniones2))
 
})


// OPINION PARA FORM 4

let arrayOpiniones3 = [];

let opiniones3 = document.getElementById("boton_enviar-3")

opiniones3.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input3 = document.getElementById("opinion_input-3").value

    arrayOpiniones3.push(opinion_input3)

    console.log (arrayOpiniones3)

    localStorage.setItem ("opinionGuardada3", JSON.stringify(arrayOpiniones3))

})

// OPINION PARA FORM 5

let arrayOpiniones4 = [];

let opiniones4 = document.getElementById("boton_enviar-4")

opiniones4.addEventListener("submit", (e) => {

    e.preventDefault()

    let opinion_input4 = document.getElementById("opinion_input-4").value

    arrayOpiniones4.push(opinion_input4)

    console.log (arrayOpiniones4)

    localStorage.setItem ("opinionGuardada4", JSON.stringify(arrayOpiniones4))

})


// OPINION PARA FORM 6

let arrayOpiniones5 = [];

let opiniones5 = document.getElementById("boton_enviar-5")

opiniones5.addEventListener("submit", (e) => {

    e.preventDefault()
    
    let opinion_input5 = document.getElementById("opinion_input-5").value

    arrayOpiniones5.push(opinion_input5)

    console.log (arrayOpiniones5)

    localStorage.setItem ("opinionGuardada5", JSON.stringify(arrayOpiniones5))

})



