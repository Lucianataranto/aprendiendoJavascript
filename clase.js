let contador = 1
let precio = 0
let titulo = 0
let descuento = 0
let resultado = Number(precio * descuento)

function login (contador) {
let usuario = prompt('Ingrese su usuario')
while(usuario !== 'luciana' && contador < 3) {
    alert('Usuario incorrecto')
    contador++
    usuario = prompt('Ingrese su usuario nuevamente')
}
if (contador ===3) {
    alert('Por su seguridad, su usuario ha sido bloqueado temporalmente. Vuela a intentarlo más tarde.')
} else {
    alert('Bienvenidx ' + usuario)
}
}

login(contador)
let tipoDeLibro = prompt('¿Usted busca leer novela, cuento o poesía?').toLowerCase()


    switch(tipoDeLibro) {
        case 'cuento':
            titulo = "Los peligros de fumar en la cama"
            precio = 3500
            condicional = prompt('Entonces te recomendamos "Los peligros de fumar en la cama", de Mariana Enríquez, ¿Querés comprarlo?').toLowerCase()
            if (condicional=="si") {
                alert (titulo + ' sale '+ precio)
                banco(precio)
            } else if (condicional=="no") {
                alert ("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
            } else {
                alert ("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
            }
            break
        case 'novela':
            titulo = "Días sin hambre"
            precio = 4000
            condicional = prompt('Entonces te recomendamos "Días sin hambre", de Delphine de Vigan, ¿Querés comprarlo?')
            if (condicional=="si") {
                alert (titulo + ' sale '+ precio)
                banco(precio)
            } else if (condicional=="no") {
                alert ("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
            } else {
                alert ("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
            }
            break
        case 'poesia':
            titulo = "Las obras completas de Alejandra Pizarnik"
            precio = 5250
            condicional = prompt('Entonces te recomendamos las obras completas de Alejandra Pizarnik, ¿Querés comprarlo?')
            if (condicional=="si") {
                alert (titulo + ' sale '+ precio)
                banco(precio)
            } else if (condicional=="no") {
                alert ("También podés ver los libros de nuestro catálogo y descubrir cuál es para vos")
            } else {
                alert ("Por favor escribí 'si' o 'no' para que podamos procesar tu respuesta")
            }
            break
        default:
            alert ('Por favor, elegí entre Cuento, Poesía o Novela. Si no lo tenés definido, podés ver los libros de nuestro catálogo y descubrir cuál es para vos')
    }


    function banco(precio) {
        let entidad = prompt("Si abona con banco Galicia, Credicoop o Santander, tiene descuento. ¿Con qué banco va a abonar?").toLowerCase()
        if (entidad == "galicia"){
            descuento = 0.25
            resultado = Number(precio * descuento)
            alert ("Su descuento es de $" + resultado)
        } else if (entidad == "credicoop") {
            descuento = 0.30
            resultado = Number(precio * descuento)
            alert ("Su descuento es de $" + resultado)
        } else if (entidad == "santander") {
            descuento = 0.15
            resultado = Number(precio * descuento)
            alert ("Su descuento es de $" + resultado)
        } else {
             alert ('No tenemos descuento con ese banco')
        }
        return (resultado)
    }





