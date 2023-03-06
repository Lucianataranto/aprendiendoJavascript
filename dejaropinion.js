let opiniones = document.getElementById("boton_enviar")

opiniones.addEventListener("click", function(){
    
    let opinion_input = document.getElementById("opinion_input")
    
    li.innerHTML = `<span>${opinion_input.value}</span>
    <button class="btn_borrar">BORRAR</button>`

    lista.append( li );

let botones_borrar = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar);

for( let boton of botones_borrar ){
boton.addEventListener("click" , borrar_elemento );
}

localStorage.setItem("opinionGuardada", opinion_input)

function obtenerOpinion () {
    let opinionObtenida = localStorage.getItem ("opinionGuardada")
    console.log (opinionObtenida)
}

})

if(opiniones) {
    opiniones.addEventListener("click", function(){
    
    let opinion_input = document.getElementById("opinion_input")
    
    li.innerHTML = `<span>${opinion_input.value}</span>
    <button class="btn_borrar">BORRAR</button>`

    lista.append( li );

    localStorage.setItem("opinionGuardada", opinion_input)

    function obtenerOpinion () {
        let opinionObtenida = localStorage.getItem ("opinionGuardada")
        console.log (opinionObtenida)
    }
})
}

function borrar_elemento(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 
}