// OPINION OBTENIDA FORM 1

let opinionObtenida = (localStorage.getItem ("opinionGuardada"))
    console.log (opinionObtenida)

let lista = document.getElementById("lista")

let li = document.createElement("li")
    
    li.innerHTML = `<span>${opinionObtenida}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista.append( li );

let botones_borrar = document.querySelectorAll(".btn_borrar");

for( let boton of botones_borrar ){
    boton.addEventListener("click" , function (e) {
    
        console.log("BORRAR ESTE ELEMENTO: " , e.target);

        let nodo_hijo = e.target;
        let nodo_padre = nodo_hijo.parentNode;
    
        console.log(nodo_padre);
    
        nodo_padre.remove(); 

        localStorage.removeItem("opinionGuardada")

    })
}

// OPINION OBTENIDA FORM 2

let opinionObtenida1 = (localStorage.getItem ("opinionGuardada1"))
    console.log (opinionObtenida1)

let lista1 = document.getElementById("lista-1")

let li1 = document.createElement("li")
    
    li1.innerHTML = `<span>${opinionObtenida1}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista1.append( li1 );

let botones_borrar1 = document.querySelectorAll(".btn_borrar");

for( let boton of botones_borrar1 ){
    boton.addEventListener("click" , borrar_elemento );
}

function borrar_elemento(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    localStorage.removeItem("opinionGuardada1")
}


// OPINION OBTENIDA FORM 3

let opinionObtenida2 = (localStorage.getItem ("opinionGuardada2"))
    console.log (opinionObtenida2)

let lista2 = document.getElementById("lista-2")

let li2 = document.createElement("li")
    
    li2.innerHTML = `<span>${opinionObtenida2}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista2.append( li2 );

let botones_borrar2 = document.querySelectorAll(".btn_borrar");

for( let boton of botones_borrar2 ){
    boton.addEventListener("click" , borrar_elemento );
}

function borrar_elemento(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    localStorage.removeItem("opinionGuardada2")
}


// OPINION OBTENIDA FORM 4

let opinionObtenida3 = (localStorage.getItem ("opinionGuardada3"))
    console.log (opinionObtenida3)

let lista3 = document.getElementById("lista-3")

let li3 = document.createElement("li")
    
    li3.innerHTML = `<span>${opinionObtenida3}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista3.append( li3 );

let botones_borrar3 = document.querySelectorAll(".btn_borrar");

for( let boton of botones_borrar3 ){
    boton.addEventListener("click" , borrar_elemento );
}

function borrar_elemento(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    localStorage.removeItem("opinionGuardada3")
}

// OPINION OBTENIDA FORM 5

let opinionObtenida4 = (localStorage.getItem ("opinionGuardada4"))
    console.log (opinionObtenida4)

let lista4 = document.getElementById("lista-4")

let li4 = document.createElement("li")
    
    li4.innerHTML = `<span>${opinionObtenida4}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista4.append( li4 );

let botones_borrar4 = document.querySelectorAll(".btn_borrar");

for( let boton of botones_borrar4 ){
    boton.addEventListener("click" , borrar_elemento );
}

function borrar_elemento(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    localStorage.removeItem("opinionGuardada4")
}

// OPINION OBTENIDA FORM 6

let opinionObtenida5 = (localStorage.getItem ("opinionGuardada5"))
    console.log (opinionObtenida5)

let lista5 = document.getElementById("lista-5")

let li5 = document.createElement("li")
    
    li5.innerHTML = `<span>${opinionObtenida5}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista5.append( li5 );

let botones_borrar5 = document.querySelectorAll(".btn_borrar");

for( let boton of botones_borrar5 ){
    boton.addEventListener("click" , borrar_elemento );
}

function borrar_elemento(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    localStorage.removeItem("opinionGuardada5")

}
  
  