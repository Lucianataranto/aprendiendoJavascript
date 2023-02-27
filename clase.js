
let contador = 1

function login() {
    let usuario = prompt('Ingrese su usuario').toLowerCase()
    while (usuario !== 'luciana' && contador < 3) {
        alert('Usuario incorrecto')
        contador++
        usuario = prompt('Ingrese su usuario nuevamente')
    }
    if (contador === 3) {
        alert('Por su seguridad, su usuario ha sido bloqueado temporalmente. Vuela a intentarlo más tarde.')
    } else {
        alert('Bienvenidx ' + usuario)
    }
}

login()

let stockLibros = [
    {categoria: "cuento", titulo: "Los peligros de fumar en la cama", autor: "Mariana Enríquez", precio: 3500},
    {categoria: "novela", titulo: "Días sin hambre", autor: "Delphine de Vigan", precio: 4000},
    {categoria: "poesia", titulo: "Las obras completas de Alejandra Pizarnik", autor: "Alejandra Pizarnik", precio: 5250}
    ]

    let eleccionUser = prompt('¿Usted busca leer novela, cuento o poesía?').toLowerCase()
    let producto = stockLibros.find (p => p.categoria == eleccionUser)
    
    function elegirLibro () {
        while (eleccionUser !== "cuento" && eleccionUser !== "novela" && eleccionUser !== "poesia" && contador <3) {
            alert('Por favor, elija entre "cuento", "novela" o "poesía"')
            contador++
            eleccionUser = prompt('¿Usted busca leer novela, cuento o poesía?').toLowerCase()
        } if (eleccionUser == "cuento" || eleccionUser == "novela" || eleccionUser || "poesia") {
        producto = stockLibros.find (p => p.categoria == eleccionUser)
        alert('Entonces te recomendamos ' + producto.titulo + ' de ' + producto.autor)
        alert(producto.titulo + ' cuesta $' + producto.precio)
        comprar (stockLibros, producto)
        }
        }

    
    elegirLibro (stockLibros, producto)

function comprar() {
    let compra = prompt("¿Desea comprarlo?").toLowerCase()
    while (compra !== "si" && compra !== "no" && contador <3) {
    alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
    let compra = prompt("¿Desea comprarlo?").toLowerCase(
        contador++
    )
    } if (compra == "si") {
    banco(stockLibros, producto)
    } else if (compra == "no") {
    alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
    }
    }


function banco(stockLibros, producto) {
    let descuento = 0
    let precioDescuento = 0
    let precioFinal = 0
    let entidad = prompt("Si abona con banco Galicia, Credicoop o Santander, tiene descuento. ¿Con qué banco va a abonar?").toLowerCase()
    if (entidad == "galicia") {
        descuento = 0.25
        precioDescuento = producto.precio * descuento
        precioFinal = producto.precio - precioDescuento
        alert('Tenes un descuento de $' + precioDescuento)
        alert("En total, el libro sale $" + precioFinal)
    } else if (entidad == "credicoop") {
    descuento = 0.30
    precioDescuento = producto.precio * descuento
    precioFinal = producto.precio - precioDescuento
    alert('Tenes un descuento de $' + precioDescuento)
    alert("En total, el libro sale $" + precioFinal)
} else if (entidad == "santander") {
    descuento = 0.15
    precioDescuento = producto.precio * descuento
    precioFinal = producto.precio - precioDescuento
    alert('Tenes un descuento de $' + precioDescuento)
    alert("En total, el libro sale $" + precioFinal)
} else {
    alert('No tenemos descuento con ese banco')
    alert(producto.titulo + ' sin descuento cuesta $' + producto.precio)
}
}






