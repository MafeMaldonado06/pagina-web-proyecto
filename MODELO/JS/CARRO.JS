document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
    {
        id: 1,
        nombre: 'Banano-(FRUTA)',
        precio: 3650,
        imagen: './IMG/banano.jpg'
    },
    {
        id: 2,
        nombre: 'Sandia / Patilla-(FRUTA)',
        precio: 2800,
        imagen: './IMG/sandia.jpg'
    },
    {
        id: 3,
        nombre: 'Manzana-(FRUTA)',
        precio: 1242,
        imagen: './IMG/manzana.jpeg'
    },
    {
        id: 4,
        nombre: 'Mango dulce-(FRUTA)',
        precio: 2392,
        imagen: './IMG/mango.jpg'
    },
    {
        id: 5,
        nombre: 'Kiwi verde-(FRUTA)',
        precio: 4143,
        imagen: './IMG/kiwi.jpg'
    },
    {
        id: 6,
        nombre: 'Durazno-(FRUTA)',
        precio: 2490,
        imagen: './IMG/durazno.jpg'
    },
    {
        id: 7,
        nombre: 'Brocoli-(VERDURA)',
        precio: 2000,
        imagen: './IMG/brocoli.jpg'
    },
    {
        id: 8,
        nombre: 'Zanahoria-(VERDURA)',
        precio: 982,
        imagen: './IMG/zanahoria.jpg'
    },
    {
        id: 9,
        nombre: 'Tomate-(VERDURA)',
        precio: 1419,
        imagen: './IMG/tomate.jpg'
    },
    {
        id: 10,
        nombre: 'Pepino-(VERDURA)',
        precio: 950,
        imagen: './IMG/pepino.jpg'
    },
    {
        id: 11,
        nombre: 'Lechuga-(VERDURA)',
        precio: 2000,
        imagen: './IMG/lechuga.jpg'
    },
    {
        id: 12,
        nombre: 'Cebolla-(VERDURA)',
        precio: 1600,
        imagen: './IMG/cebolla.jpg'
    },
    {
        id: 13,
        nombre: 'Soya/Soja-(LEGUMBRES)',
        precio: 6430,
        imagen: './IMG/soya.jpg'
    },
    {
        id: 14,
        nombre: 'Lentejas-(LEGUMBRES)',
        precio: 1115,
        imagen: './IMG/lenteja.jpg'
    },
    {
        id: 15,
        nombre: 'Judias-(LEGUMBRES)',
        precio: 3324,
        imagen: './IMG/judias.jpg'
    },
    {
        id: 16,
        nombre: 'Guisantes-(LEGUMBRES)',
        precio: 2490,
        imagen: './IMG/guisantes.jpg'
    },
    {
        id: 17,
        nombre: 'Frijol rojo-(LEGUMBRES)',
        precio: 2760,
        imagen: './IMG/frijol.jpg'
    },
    {
        id: 18,
        nombre: 'Garbanzo-(LEGUMBRES)',
        precio: 3750,
        imagen: './IMG/garbanzo.jpg'
    },
    {
        id: 19,
        nombre: 'Carne de res-(CARNICOS)',
        precio: 24958,
        imagen: './IMG/res.jpg'
    },
    {
        id: 20,
        nombre: 'Carne de cerdo-(CARNICOS)',
        precio: 16254,
        imagen: './IMG/Cerdo.jpg'
    },
    {
        id: 21,
        nombre: 'Muslos de pollo-(CARNICOS)',
        precio: 15100,
        imagen: './IMG/muslo.png'
    },
    {
        id: 22,
        nombre: 'Barra de salchichon-(CARNICOS)',
        precio: 16590,
        imagen: './IMG/salchichon.jpg'
    },
    {
        id: 23,
        nombre: 'Salchicha-(CARNICOS)',
        precio: 5320,
        imagen: './IMG/salchicha.jpg'
    },
    {
        id: 24,
        nombre: 'Pechuga de pollo-(CARNICOS)',
        precio: 20400,
        imagen: './IMG/pechuga.jpg'
    },
    {
        id: 25,
        nombre: 'Yogurt-(LACTEOS)',
        precio: 7000,
        imagen: './IMG/yogurt.jpg'
    },
    {
        id: 26,
        nombre: 'Queso crema-(LACTEOS)',
        precio: 19996,
        imagen: './IMG/queso.jpg'
    },
    {
        id: 27,
        nombre: 'Mantequilla-(LACTEOS)',
        precio: 7250,
        imagen: './IMG/mantequilla.jpg'
    },
    {
        id: 28,
        nombre: 'Leche-(LACTEOS)',
        precio: 3300,
        imagen: './IMG/leche.webp'
    },
    {
        id: 29,
        nombre: 'Cuajada-(LACTEOS)',
        precio: 14900,
        imagen: './IMG/cuajada.jpg'
    },
    {
        id: 30,
        nombre: 'Huevos-(LACTEOS)',
        precio: 15400,
        imagen: './IMG/huevos.jfif'
    },

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMtotal_IVA = document.querySelector('#total_IVA');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-md-2');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h2');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text', 'divisas');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary', 'botonagregar');
        miNodoBoton.textContent = 'Agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre}  - ${divisa}${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'Eliminar';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
   // Renderizamos el precio total en el HTML
   DOMtotal.textContent = calcularTotal();
   DOMtotal_IVA.textContent = calcularTotalIVA();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}
const iva = 1000

function calcularTotalIVA() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + iva + miItem[0].precio;
    }, 0).toFixed(2);
}
/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();
});