
// OPINION OBTENIDA FORM 1

let opinionObtenida = localStorage.getItem ("opinionGuardada")
    console.log (opinionObtenida)

let lista = document.createElement("ul")

let li = document.createElement("li")
    
    li.innerHTML = `<span>${opinionObtenida}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista.append( li );

let botones_borrar = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar);

for( let boton of botones_borrar ){
boton.addEventListener("click" , borrar_elemento );
}

// OPINION OBTENIDA FORM 2

let opinionObtenida1 = localStorage.getItem ("opinionGuardada1")
    console.log (opinionObtenida1)

let lista1 = document.createElement("ul")

let li1 = document.createElement("li")
    
    li1.innerHTML = `<span>${opinionObtenida1}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista1.append( li1 );

let botones_borrar1 = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar1);

for( let boton of botones_borrar1 ){
boton.addEventListener("click" , borrar_elemento );
}

// OPINION OBTENIDA FORM 3

let opinionObtenida2 = localStorage.getItem ("opinionGuardada2")
    console.log (opinionObtenida1)

let lista2 = document.createElement("ul")

let li2 = document.createElement("li")
    
    li2.innerHTML = `<span>${opinionObtenida2}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista2.append( li2 );

let botones_borrar2 = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar2);

for( let boton of botones_borrar1 ){
boton.addEventListener("click" , borrar_elemento );
}

// OPINION OBTENIDA FORM 4

let opinionObtenida3 = localStorage.getItem ("opinionGuardada3")
    console.log (opinionObtenida3)

let lista3 = document.createElement("ul")

let li3 = document.createElement("li")
    
    li3.innerHTML = `<span>${opinionObtenida3}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista3.append( li3 );

let botones_borrar3 = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar3);

for( let boton of botones_borrar3 ){
boton.addEventListener("click" , borrar_elemento );
}

// OPINION OBTENIDA FORM 5

let opinionObtenida4 = localStorage.getItem ("opinionGuardada4")
    console.log (opinionObtenida4)

let lista4 = document.createElement("ul")

let li4 = document.createElement("li")
    
    li4.innerHTML = `<span>${opinionObtenida4}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista4.append( li4 );

let botones_borrar4 = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar4);

for( let boton of botones_borrar4 ){
boton.addEventListener("click" , borrar_elemento );
}

// OPINION OBTENIDA FORM 6

let opinionObtenida5 = localStorage.getItem ("opinionGuardada5")
    console.log (opinionObtenida5)

let lista5 = document.createElement("ul")

let li5 = document.createElement("li")
    
    li5.innerHTML = `<span>${opinionObtenida5}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista1.append( li5 );

let botones_borrar5 = document.querySelectorAll(".btn_borrar");

console.log( botones_borrar5);

for( let boton of botones_borrar5 ){
boton.addEventListener("click" , borrar_elemento );
}

// if(opiniones) {
//     opiniones.addEventListener("click", function(){
    
//     let opinion_input = document.getElementById("opinion_input")
    
//     li.innerHTML = `<span>${opinion_input.value}</span>
//     <a href="./opiniones.html"> Ver mi opinión </a>
//     <button class="btn_borrar">BORRAR</button>`

//     lista.append( li );

//     localStorage.setItem("opinionGuardada", opinion_input)

//     // function obtenerOpinion () {
//     //     let opinionObtenida = localStorage.getItem ("opinionGuardada")
//     //     console.log (opinionObtenida)
//     // }
// })
// }

// for (let i = 0; i < localStorage.length; i + 1) {
//     let partida = localStorage.key(i)
//     let opinionObtenida = localStorage.getItem (partida)
//     console.log (opinionObtenida)
// }

// function borrar_elemento(e){
//     console.log("BORRAR ESTE ELEMENTO: " , e.target);

//     let nodo_hijo = e.target;
//     let nodo_padre = nodo_hijo.parentNode;

//     console.log(nodo_padre);

//     nodo_padre.remove(); 
// }