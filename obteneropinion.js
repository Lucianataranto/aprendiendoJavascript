// OPINION OBTENIDA FORM 1

let opinionObtenida = JSON.parse(localStorage.getItem ("opinionGuardada")) || []
    console.log (opinionObtenida)

let lista = document.getElementById("lista")

opinionObtenida.forEach(element => {

    let li = document.createElement("li")

    li.innerHTML = `<span>${element}</span>
    <button class="btn_borrar">BORRAR</button>`
    lista.append( li );

    eventoBoton ()

});

function eventoBoton () {

let boton_borrar = document.querySelectorAll(".btn_borrar");

boton_borrar.forEach(btn => btn.addEventListener ("click", borrar_elemento))

}

    function borrar_elemento (e) {

    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove();

    opinionObtenida = [];

    localStorage.removeItem("opinionGuardada")
    
    }


// OPINION OBTENIDA FORM 2

let opinionObtenida1 = JSON.parse(localStorage.getItem ("opinionGuardada1")) || []
    console.log (opinionObtenida1)

let lista1 = document.getElementById("lista-1")

opinionObtenida1.forEach(element => {

    let li = document.createElement("li")

    li.innerHTML = `<span>${element}</span>
    <button class="btn_borrar1">BORRAR</button>`
    lista1.append( li );

    eventoBoton1 ()

});


function eventoBoton1 () {

let boton_borrar1 = document.querySelectorAll(".btn_borrar1");

boton_borrar1.forEach(btn => btn.addEventListener ("click", borrar_elemento1))


}

function borrar_elemento1(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    opinionObtenida1 = [];

    localStorage.removeItem("opinionGuardada1")
}


// OPINION OBTENIDA FORM 3

let opinionObtenida2 = JSON.parse(localStorage.getItem ("opinionGuardada2")) || []
    console.log (opinionObtenida2)

let lista2 = document.getElementById("lista-2")

opinionObtenida2.forEach(element => {

    let li = document.createElement("li")

    li.innerHTML = `<span>${element}</span>
    <button class="btn_borrar2">BORRAR</button>`
    lista2.append( li );

    eventoBoton2 ()

});


function eventoBoton2 () {

let boton_borrar2 = document.querySelectorAll(".btn_borrar2");

boton_borrar2.forEach(btn => btn.addEventListener ("click", borrar_elemento2))


}


function borrar_elemento2(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    opinionObtenida2 = [];

    localStorage.removeItem("opinionGuardada2")
}


// OPINION OBTENIDA FORM 4

let opinionObtenida3 = JSON.parse(localStorage.getItem ("opinionGuardada3")) || []
    console.log (opinionObtenida3)

let lista3 = document.getElementById("lista-3")

opinionObtenida3.forEach(element => {

    let li = document.createElement("li")

    li.innerHTML = `<span>${element}</span>
    <button class="btn_borrar3">BORRAR</button>`
    lista3.append( li );

    eventoBoton3 ()

});


function eventoBoton3 () {

let boton_borrar3 = document.querySelectorAll(".btn_borrar3");
    
boton_borrar3.forEach(btn => btn.addEventListener ("click", borrar_elemento3))


}

function borrar_elemento3(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    opinionObtenida3 = [];

    localStorage.removeItem("opinionGuardada3")
}

// OPINION OBTENIDA FORM 5

let opinionObtenida4 = JSON.parse(localStorage.getItem ("opinionGuardada4")) || []
    console.log (opinionObtenida4)

let lista4 = document.getElementById("lista-4")

opinionObtenida4.forEach(element => {

    let li = document.createElement("li")

    li.innerHTML = `<span>${element}</span>
    <button class="btn_borrar4">BORRAR</button>`
    lista4.append( li );

    eventoBoton4 ()

});


function eventoBoton4 () {

let boton_borrar4 = document.querySelectorAll(".btn_borrar4");

boton_borrar4.forEach(btn => btn.addEventListener ("click", borrar_elemento4))

}


function borrar_elemento4(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    opinionObtenida4 = [];

    localStorage.removeItem("opinionGuardada4")
}

// OPINION OBTENIDA FORM 6

let opinionObtenida5 = JSON.parse(localStorage.getItem ("opinionGuardada5")) || []
    console.log (opinionObtenida5)

let lista5 = document.getElementById("lista-5")

opinionObtenida5.forEach(element => {

    let li = document.createElement("li")

    li.innerHTML = `<span>${element}</span>
    <button class="btn_borrar5">BORRAR</button>`
    lista5.append( li );

    eventoBoton5 ()

});

function eventoBoton5 () {

let boton_borrar5 = document.querySelectorAll(".btn_borrar5");

boton_borrar5.forEach(btn => btn.addEventListener ("click", borrar_elemento5))


}


function borrar_elemento5(e){
    console.log("BORRAR ESTE ELEMENTO: " , e.target);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;

    console.log(nodo_padre);

    nodo_padre.remove(); 

    opinionObtenida5 = [];

    localStorage.removeItem("opinionGuardada5")

}
  
  