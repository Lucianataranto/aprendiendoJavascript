
// EVENTOS PARA CAMBIO DE IMAGEN

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


// EVENTO PARA CARRITO DE COMPRAS

let carritoDeCompras = JSON.parse(localStorage.getItem ("carrito")) || []
console.log (carritoDeCompras)

let boton_comprar = document.querySelectorAll(".botoncomprar")

console.log (boton_comprar)

for (let boton of boton_comprar) {

    boton.addEventListener("click", comprar)
}

function comprar (e) {
    console.log (e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let nombre_producto = padre.querySelector("h4").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let imagen_producto = abuelo.querySelector("img").src;

    console.log (nombre_producto)
    console.log (precio_producto)
    console.log (imagen_producto)

    let arregloCarrito = {
        precio: precio_producto,
        nombre: nombre_producto,
        imagen: imagen_producto,
        cantidad: 1
    
    }

    carritoDeCompras.push(arregloCarrito);

    
    let arreglo_guardado = JSON.stringify(carritoDeCompras);

    localStorage.setItem("carrito" , arreglo_guardado);

    renderizarProductos ()

    // mostrar_carrito()

    return e

}

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function renderizarProductos() {
        
        DOMitems.innerHTML = "";

        // let carritoAlmacenado = JSON.parse(localStorage.getItem ("carrito")) || []
        // console.log (carritoAlmacenado)

        carritoDeCompras.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}`;
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

let botonVaciar = document.getElementById("boton-vaciar")

botonVaciar.addEventListener("click" , vaciarCarrito)
    
    function vaciarCarrito(e) {

        carritoDeCompras = [];

        localStorage.removeItem("carrito")

        renderizarProductos ()
    }