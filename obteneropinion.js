// Función para mostrar una opinión en una lista
function mostrarOpinion() {
    let opinionObtenida = JSON.parse(localStorage.getItem ("opinionGuardada"))
    console.log (opinionObtenida)
    let lista = document.querySelectorAll(".lista");
    console.log(lista)
    let li = document.createElement("li");
    li.innerHTML = `<span>${opinionObtenida}</span>
      <button class="btn_borrar">BORRAR</button>`;
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
    let opiniones = JSON.parse(localStorage.getItem("opinionGuardada")) || [];
    let nuevaLista = opiniones.filter((o) => o !== opinion);
    localStorage.setItem("opiniones", JSON.stringify(nuevaLista));
    console.log(elemento.id)
    localStorage.removeItem(elemento.id);
  }
  
  