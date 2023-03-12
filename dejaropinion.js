// Función para manejar los eventos de envío de formulario
function enviarOpinion(e, formId, inputId) {
    e.preventDefault();
  
    let opinionInput = document.getElementById(inputId);
    let opinion = opinionInput.value;
  
    // Agregar la opinión al almacenamiento local
    let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
    opiniones.push(opinion);
    localStorage.setItem(`opinionGuardada${formId}`, JSON.stringify(opinion));
  
    // Agregar la opinión a la lista correspondiente
    mostrarOpinion(opinion, `opinionGuardada${formId}`);
  
    // Limpiar el campo de entrada de opinión
    opinionInput.value = "";
  }
  
  // Configuración de eventos de envío de formulario
  for (let i = 1; i <= 5; i++) {
    let botonEnviar = document.getElementById(`boton_enviar-${i}`);
    if (botonEnviar) {
      botonEnviar.addEventListener("submit", (e) => {
        enviarOpinion(e, i, `opinion_input-${i}`);
      });
    }
  }
  