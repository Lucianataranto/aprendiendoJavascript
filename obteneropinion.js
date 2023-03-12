// Función para mostrar una opinión en una lista
function mostrarOpinion(opinion, listaId) {
    let lista = document.getElementById(listaId);
    console.log(lista)
    let li = document.createElement("li");
    li.innerHTML = `<span>${opinion}</span>
      <button class="btn_borrar">BORRAR</button>`;
    li.id = listaId
    if (li)
    lista.append(li);
  
    let botonBorrar = li.querySelector(".btn_borrar");
    botonBorrar.addEventListener("click", function(e) {
      borrarElemento(e.target.parentNode);
    });
  }
  
  // Función para borrar un elemento de la lista
  function borrarElemento(elemento) {
    let opinion = elemento.firstChild.textContent;
    let lista = elemento.parentNode;
    lista.removeChild(elemento);
  
    // Eliminar la opinión del almacenamiento local
    let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
    let nuevaLista = opiniones.filter((o) => o !== opinion);
    localStorage.setItem("opiniones", JSON.stringify(nuevaLista));
    console.log(elemento.id)
    localStorage.removeItem(elemento.id);
  }
  
  // Mostrar las opiniones en sus respectivas listas
  let opiniones = [
    JSON.parse(localStorage.getItem("opinionGuardada1")),
    JSON.parse(localStorage.getItem("opinionGuardada2")),
    JSON.parse(localStorage.getItem("opinionGuardada3")),
    JSON.parse(localStorage.getItem("opinionGuardada4")),
    JSON.parse(localStorage.getItem("opinionGuardada5")),
    JSON.parse(localStorage.getItem("opinionGuardada6")),
  ];
  
  let listaIds = ["opinionGuardada1", "opinionGuardada2", "opinionGuardada3", "opinionGuardada4", "opinionGuardada5", "opinionGuardada6"];
  
  for (let i = 0; i < opiniones.length; i++) {
    if (opiniones[i] !== null) {
      mostrarOpinion(opiniones[i], listaIds[i]);
    }
  }
  