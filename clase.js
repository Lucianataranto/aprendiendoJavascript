// no me funciona la parte de descuento
// no me funciona la parte del while cuando no elige ni cuento ni novela ni poesia

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
        return producto
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
    let precioDescuento = producto.precio * descuento
    let precioFinal = producto.precio - precioDescuento
    let entidad = prompt("Si abona con banco Galicia, Credicoop o Santander, tiene descuento. ¿Con qué banco va a abonar?").toLowerCase()
    if (entidad == "galicia") {
        descuento = 0.25
        producto.precio = stockLibros.find (p => p.precio == producto.precio)
        alert('Tenes un descuento de ' + precioDescuento)
        alert("En total, el libro sale $" + precioFinal)
    } else if (entidad == "credicoop") {
    descuento = 0.30
    producto.precio = stockLibros.find (p => p.precio == producto.precio)
    alert('Tenes un descuento de ' + precioDescuento)
    alert("En total, el libro sale $" + precioFinal)
} else if (entidad == "santander") {
    descuento = 0.15
    producto.precio = stockLibros.find (p => p.precio == producto.precio)
    alert('Tenes un descuento de ' + precioDescuento)
    alert("En total, el libro sale $" + precioFinal)
} else {
    alert('No tenemos descuento con ese banco')
}
}







// function libroCuento (banco) {
//     titulo = "Los peligros de fumar en la cama"
//     precio = 3500
//     condicional = prompt('Entonces te recomendamos "Los peligros de fumar en la cama", de Mariana Enríquez, ¿Querés comprarlo?').toLowerCase()
//     if (condicional == "si") {
//         alert(titulo + ' sale ' + precio)
//         banco(precio)
//     } else if (condicional == "no") {
//         alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
//     } else {
//         alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
//     }
// }

// function libroPoesia (banco) {
//     titulo = "Las obras completas de Alejandra Pizarnik"
//     precio = 5250
//     condicional = prompt('Entonces te recomendamos las obras completas de Alejandra Pizarnik, ¿Querés comprarlo?')
//     if (condicional == "si") {
//         alert(titulo + ' sale ' + precio)
//         banco(precio)
//     } else if (condicional == "no") {
//         alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
//     } else {
//         alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
//     }
// }

// function libroNovela (banco) {
//     titulo = "Días sin hambre"
//     precio = 4000
//     condicional = prompt('Entonces te recomendamos "Días sin hambre", de Delphine de Vigan, ¿Querés comprarlo?')
//     if (condicional == "si") {
//         alert(titulo + ' sale ' + precio)
//         banco(precio)
//     } else if (condicional == "no") {
//         alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
//     } else {
//         alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
//     }
// }

// function elegirLibro (libroCuento, libroNovela, libroPoesia, banco) {
// let tipoDeLibro = prompt('¿Usted busca leer novela, cuento o poesía?').toLowerCase()
// switch (tipoDeLibro) {
// case 'cuento':
//     libroCuento (banco)
// case 'novela':
//     libroNovela (banco)
// case 'poesia':
//     libroPoesia (banco)
// }
// }



// let tipoDeLibro = prompt('¿Usted busca leer novela, cuento o poesía?').toLowerCase()


// switch (tipoDeLibro) {
//     case 'cuento':
//         titulo = "Los peligros de fumar en la cama"
//         precio = 3500
//         condicional = prompt('Entonces te recomendamos "Los peligros de fumar en la cama", de Mariana Enríquez, ¿Querés comprarlo?').toLowerCase()
//         if (condicional == "si") {
//             alert(titulo + ' sale ' + precio)
//             banco(precio)
//         } else if (condicional == "no") {
//             alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
//         } else {
//             alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
//         }
//         break
//     case 'novela':
//         titulo = "Días sin hambre"
//         precio = 4000
//         condicional = prompt('Entonces te recomendamos "Días sin hambre", de Delphine de Vigan, ¿Querés comprarlo?')
//         if (condicional == "si") {
//             alert(titulo + ' sale ' + precio)
//             banco(precio)
//         } else if (condicional == "no") {
//             alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
//         } else {
//             alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
//         }
//         break
//     case 'poesia':
//         titulo = "Las obras completas de Alejandra Pizarnik"
//         precio = 5250
//         condicional = prompt('Entonces te recomendamos las obras completas de Alejandra Pizarnik, ¿Querés comprarlo?')
//         if (condicional == "si") {
//             alert(titulo + ' sale ' + precio)
//             banco(precio)
//         } else if (condicional == "no") {
//             alert("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
//         } else {
//             alert("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
//         }
//         break
//     default:
//         alert('Por favor, elegí entre Cuento, Poesía o Novela. Si no lo tenés definido, podés ver los libros de nuestro catálogo y descubrir cuál es para vos')
// }
