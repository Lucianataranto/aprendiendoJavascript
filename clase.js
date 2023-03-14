
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
    let nombre_producto = padre.querySelector("h5").textContent;
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

    
let botonVaciar = document.getElementById("boton-vaciar")

botonVaciar.addEventListener("click" , vaciarCarrito)
    
    function vaciarCarrito() {

        // Limpiamos los productos guardados
        // Renderizamos los cambios
        localStorage.removeItem("carrito")
    }
}






    // function mostrar_carrito(){

    //     let carritoAlmacenado = JSON.parse(localStorage.getItem ("carrito")) || []
    //     console.log (carritoAlmacenado)

    //     let tabla = document.getElementById("tbody");
    
    //     tabla.innerHTML = "";
    
    //     for( let producto of carritoAlmacenado){
    
    //         let fila= document.createElement("tr");
    
    //         fila.innerHTML = `<td><img src="${producto.imagen}" height="200px" width="110px"></td>
    //                           <td><p>${producto.nombre}</p></td>
    //                           <td>${producto.cantidad}</td>
    //                           <td>${producto.precio}</td>
    //                           <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>
    //                           `
    //         tabla.append(fila);
    
    //     }
    
    
    //     let btn_borrar = document.querySelectorAll(".borrar_elemento");
    
    //     //console.log(btn_borrar);
    
    //     for( let boton of btn_borrar){
    
    //         boton.addEventListener("click" , borrar_producto);
    //     }

    //     function borrar_producto(e){
    
    //         console.log("BORRAR ESTO: " ,e.target);
            
    //         let abuelo = e.target.parentNode.parentNode;
        
    //         let producto_eliminar = abuelo.querySelector("p").textContent;
        
           
        
    //         function eliminar_producto( producto){
        
    //             return producto.nombre != producto_eliminar
    //         }
        
        
    //         let resultado_filter = carritoAlmacenado.filter( eliminar_producto );
        
    //         carritoAlmacenado = resultado_filter;
        
        
    //         mostrar_carrito();
         
    //         console.log( resultado_filter);
        
        
    //         abuelo.remove();
    //     }
        
        
        
    //     let btn_compra = document.querySelectorAll(".botonCompra");
        
    //     console.log( btn_compra );
        
        
    //     for( let boton of btn_compra ){
        
    //         boton.addEventListener("click" , agregar_a_carrito);
    //     }
        
        
        
        
    //     let btn_carrito = document.getElementById("mostrar_carrito");
        
    //     btn_carrito.addEventListener("click" , function(){
        
        
    //         let carrito = document.getElementById("carrito");
        
        
    //         if( carrito.style.display == "none"){
        
    //             carrito.style.display = "block";
    //         }
    //         else{
    //             carrito.style.display = "none";
    //         }
    //     })
    
    
    
       
    // }
