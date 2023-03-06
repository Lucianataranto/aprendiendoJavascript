
let _button = document.getElementById("_button")

_button.addEventListener("mouseover", function() {
    background = "green"
})

_button.addEventListener("mouseout", function() {
    this.style.backgroundColor = "red"
})

let image = document.getElementById("imagen_amelie")

image.addEventListener("mouseover", function () {
    image.src = "./imagenes/fotoamelienothomb.jpg"
})

image.addEventListener("mouseout", function () {
    image.src = "./imagenes/imagenlibro1.jpeg"  
})

let image_1 = document.getElementById("imagen_michel")

image_1.addEventListener("mouseover", function () {
    image_1.src = "./imagenes/fotomichelfaber.jpg"
})

image_1.addEventListener("mouseout", function () {
    image_1.src = "./imagenes/imagenlibro2.jpeg"  
})

let image_2 = document.getElementById("imagen_delphine")

image_2.addEventListener("mouseover", function () {
    image_2.src = "./imagenes/fotodelphinedevigan.jpg"
})

image_2.addEventListener("mouseout", function () {
    image_2.src = "./imagenes/imagenlibro3.jpeg"  
})

let image_3 = document.getElementById("imagen_mariana")

image_3.addEventListener("mouseover", function () {
    image_3.src = "./imagenes/fotomarianaenriquez.jpg"
})

image_3.addEventListener("mouseout", function () {
    image_3.src = "./imagenes/imagenlibro5.jpeg"  
})

let image_4 = document.getElementById("imagen_vladimir")

image_4.addEventListener("mouseover", function () {
    image_4.src = "./imagenes/fotovladimirnabokov.jpg"
})

image_4.addEventListener("mouseout", function () {
    image_4.src = "./imagenes/imagenlibro6.jpeg"  
})

let image_5 = document.getElementById("imagen_scott")

image_5.addEventListener("mouseover", function () {
    image_5.src = "./imagenes/fotoscottfitzgerald.jpg"
})

image_5.addEventListener("mouseout", function () {
    image_5.src = "./imagenes/imagenlibro4.jpeg"  
})

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

    
    elegirLibro ()

function comprar() {
    let compra = prompt("¿Desea comprarlo?").toLowerCase()
    while (compra !== "si" && compra !== "no" && contador <3) {
    alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
    contador++
    compra = prompt("¿Desea comprarlo?").toLowerCase(
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