$(document).ready(function(){

    /* ULTIMOS PEDIDOS */

    $.ajax({
      url: "http://bdagroexpress-production.up.railway.app/OrdenCompra",
      type: 'GET',
      dataType: "JSON",
      success: function (respuesta) {
          if (respuesta.length === 0) {
              productos.innerHTML = '<div class="w-75 text-center"><h1>Lo sentimos</h1><span>No hay pedidos</span></div>';
          } else {
              let startIndex = respuesta.length - 2; // Start from the second-last index
              let id = 1;
  
              // Create the table HTML
              let table = '<div class="d-flex justify-content-center align-items-center py-2">' +
                  '<div class="contenedor-tabla d-flex align-items-center justify-content-center rounded-3 overflow-hidden">' +
                  '<table class="table table-hover table-striped text-center" id="tablaPedidos">' +
                  '<tr>' +
                  '<th>N° Compra</th>' +
                  '<td>Toma de pedido</td>' +
                  '<th>Puedes</th>' +
                  '<th>Estado</th>' +
                  '</tr>';
  
              for (let producto = startIndex; producto < respuesta.length; producto++, id++) {
                  let noCompra = respuesta[producto].OrdC_Id;
                  let tomaPedido = respuesta[producto].Fac_FechaVenta;
                  let estado = respuesta[producto].estado;//el metodo del estado no esta
  
                  // Add rows to the table
                  table += '<tr>' +
                      '<td>' + noCompra + '</td>' +
                      '<td>' + tomaPedido + '</td>' +
                      '<td>' +
                      '<div class="d-flex justify-content-center">' +
                      '<button class="boton-tabla-pedidos py-1 btn btn-success">Consultar</button>' +//no se que poner al oprimir el boton
                      '</div>' +
                      '</td>' +
                      '<td>' + estado + '</td>' +
                      '</tr>';
              }
  
              table += '</table>' +
                  '<span class="caja-opacidad-tus-pedidos"></span>' +
                  '</div>' +
                  '</div>';
  
              // Set the table HTML to the 'productos' container
              productos.innerHTML = table;
          }
      }
  });
    
    /* BUSCADOR */

    function cargarTarjetas() {
      const tarjetas1 = document.getElementById('tarjetasContainer');
      tarjetas1.innerHTML = ""; // Vaciar el contenedor de tarjetas
  
      $.ajax({
          url: 'http://bdagroexpress-production.up.railway.app/Listarproductos',
          type: 'GET',
          dataType: "JSON",
          success: function (respuesta) {
              if (respuesta.length === 0) {
                  tarjetas1.innerHTML = '<div class="w-75 text-center"><h1>Lo sentimos</h1><span>No hay productos de esta categoría</span></div>';
              } else {
                  for (let producto = 0; producto < respuesta.length; producto++) {
                      let detReferencia = respuesta[producto].det_Referencia;
                      tarjetas1.innerHTML += '<div class="carta-producto-comprador card">' +
                          '<div class="card-img overflow-hidden">' +
                          '<img src="../Img/Durazno.JPG" class="d-block w-100" alt="">' +
                          '</div>' +
                          '<div class="card-body">' +
                          '<ul class="list-unstyled">' +
                          '<li><h5>' + respuesta[producto].det_Nombre_product + '</h5></li>' +
                          '<li><span>$' + respuesta[producto].det_precio + '</span></li>' +
                          '</ul>' +
                          '<div class="contenedor-boton-agregar-carrito-comprador">' +
                          '<button class="boton-agregar-carrito-comprador" data-bs-toggle="modal" data-bs-target="#agregarCarrito">Poner en el carrito</button>' +
                          '</div>' +
                          '</div>' +
                          '</div>';
                  }
              }
          }
      });
  }
  
  function filtrarTarjetas() {
      let filtro = $("#inputBusqueda").val();
      let tarjetas = $(".carta-producto-comprador");
      tarjetas.each(function () {
          let nombreProducto = $(this).find("h5").text();
          if (!nombreProducto.toLowerCase().includes(filtro.toLowerCase())) {
              $(this).hide();
          } else {
              $(this).show();
          }
      });
  }
  
  // Cargar las tarjetas al inicio
  $(document).ready(function () {
      cargarTarjetas();
  });
  

    window.addEventListener("DOMContentLoaded", filtrarTarjetas);

    /* LISTAR PRODUCTOS */

    const tarjetas1 = document.getElementById('tarjetasContainer')

    $.ajax({
      url: 'http://bdagroexpress-production.up.railway.app/Listarproductos',
      type: 'GET',
      dataType: "JSON",
      success: function (respuesta) {
          if (respuesta.length === 0) {
              tarjetas1.innerHTML = '<div class="w-75 text-center"><h1>Lo sentimos</h1><span>No hay productos de esta categoría</span></div>';
          } else {
              for (let producto = 0; producto < respuesta.length; producto++) {
                  let detReferencia = respuesta[producto].det_Referencia;
                  tarjetas1.innerHTML += '<div class="carta-producto-comprador card">' +
                      '<div class="card-img overflow-hidden">' +
                      '<img src="../Img/Durazno.JPG" class="d-block w-100" alt="">' +
                      '</div>' +
                      '<div class="card-body">' +
                      '<ul class="list-unstyled">' +
                      '<li><h5>' + respuesta[producto].det_Nombre_product + '</h5></li>' +
                      '<li><span>$' + respuesta[producto].det_precio + '</span></li>' +
                      '</ul>' +
                      '<div class="contenedor-boton-agregar-carrito-comprador">' +
                      '<button class="boton-agregar-carrito-comprador" data-bs-toggle="modal" data-bs-target="#agregarCarrito">Poner en el carrito</button>' +
                      '</div>' +
                      '</div>' +
                      '</div>';
              }
          }
      }
  });

    /* LISTAR MAS VENDIDOS */

    const tarjetas2 = document.getElementById('tarjetasContainer2')

    $.ajax({
      url: 'http://bdagroexpress-production.up.railway.app/Listarproductos',
      type: 'GET',
      dataType: "JSON",
      success: function (respuesta) {
          if (respuesta.length === 0) {
              tarjetas2.innerHTML = '<div class="w-75 text-center"><h1>Lo sentimos</h1><span>No hay productos de esta categoría</span></div>';
          } else {
              for (let producto = 0; producto < respuesta.length; producto++) {
                  let detReferencia = respuesta[producto].det_Referencia;
                  tarjetas2.innerHTML += '<div class="carta-producto-comprador card">' +
                      '<div class="card-img overflow-hidden">' +
                      '<img src="../Img/Durazno.JPG" class="d-block w-100" alt="">' +
                      '</div>' +
                      '<div class="card-body">' +
                      '<ul class="list-unstyled">' +
                      '<li><h5>' + respuesta[producto].det_Nombre_product + '</h5></li>' +
                      '<li><span>$' + respuesta[producto].det_precio + '</span></li>' +
                      '</ul>' +
                      '<div class="contenedor-boton-agregar-carrito-comprador">' +
                      '<button class="boton-agregar-carrito-comprador" data-bs-toggle="modal" data-bs-target="#agregarCarrito">Poner en el carrito</button>' +
                      '</div>' +
                      '</div>' +
                      '</div>';
              }
          }
      }
  });

/* FRUTAS */

    /* LISTAR FRUTAS */

    // Función para cargar los productos desde el API
function cargarProductos() {
  let contenedorProductos = $(".contenedor-cartas-productos-categoria");
  contenedorProductos.html(""); // Vaciar el contenedor de productos

  $.ajax({
      url: "http://bdagroexpress-production.up.railway.app/Frutas",
      type: "GET",
      dataType: "JSON",
      success: function (respuesta) {
          if (respuesta.length === 0) {
              contenedorProductos.html('<div class="w-75 text-center"><h1>Lo sentimos</h1><span>No hay productos de esta categoría</span></div>');
          } else {
              for (let producto = 0; producto < respuesta.length; producto++) {
                  let detReferencia = respuesta[producto].det_Referencia;
                  let detNombre = respuesta[producto].det_Nombre_product;
                  let detPrecio = respuesta[producto].det_precio;

                  // Generar una carta de producto por cada elemento en la respuesta del API
                  let cartaProducto = '<div class="carta-producto-categoria-fruta card">' +
                      '<div class="card-img overflow-hidden">' +
                      '<img src="../Img/Durazno.JPG" class="d-block w-100" alt="">' +
                      '</div>' +
                      '<div class="card-body">' +
                      '<ul class="list-unstyled">' +
                      '<li><h5>' + detNombre + '</h5></li>' +
                      '<li><span>$' + detPrecio + '</span></li>' +
                      '</ul>' +
                      '<div class="contenedor-boton-agregar-carrito-comprador">' +
                      '<button class="boton-agregar-carrito-comprador" data-bs-toggle="modal" data-bs-target="#agregarCarrito">Poner en el carrito</button>' +
                      '</div>' +
                      '</div>' +
                      '</div>';

                  // Agregar la carta del producto al contenedor de productos
                  contenedorProductos.append(cartaProducto);
              }
          }
      }
  });
}

// Cargar los productos cuando la imagen termine de cargarse
let imagen = new Image();
imagen.src = "../Img/Durazno.JPG";
imagen.onload = cargarProductos;

    /* BUSCADOR FRUTAS */

    // Función para cargar los productos desde el API y aplicar el filtrado
function cargarYFiltrarProductos(filtro) {
  let contenedorProductos = $(".contenedor-cartas-productos-categoria");
  contenedorProductos.html(""); // Vaciar el contenedor de productos

  $.ajax({
      url: "http://bdagroexpress-production.up.railway.app/Frutas",
      type: "GET",
      dataType: "JSON",
      success: function (respuesta) {
          if (respuesta.length === 0) {
              contenedorProductos.html('<div class="w-75 text-center"><h1>Lo sentimos</h1><span>No hay productos de esta categoría</span></div>');
          } else {
              for (let producto = 0; producto < respuesta.length; producto++) {
                  let detNombre = respuesta[producto].det_Nombre_product;
                  // Aplicar el filtro y mostrar solo los productos que coinciden con el texto de búsqueda
                  if (detNombre.toLowerCase().includes(filtro.toLowerCase())) {
                      // Generar una carta de producto por cada elemento en la respuesta del API
                      let cartaProducto = '<div class="carta-producto-categoria-fruta card">' +
                          '<div class="card-img overflow-hidden">' +
                          '<img src="../Img/Durazno.JPG" class="d-block w-100" alt="">' +
                          '</div>' +
                          '<div class="card-body">' +
                          '<ul class="list-unstyled">' +
                          '<li><h5>' + detNombre + '</h5></li>' +
                          '<li><span>$' + respuesta[producto].det_precio + '</span></li>' +
                          '</ul>' +
                          '<div class="contenedor-boton-agregar-carrito-comprador">' +
                          '<button class="boton-agregar-carrito-comprador" data-bs-toggle="modal" data-bs-target="#agregarCarrito">Poner en el carrito</button>' +
                          '</div>' +
                          '</div>' +
                          '</div>';

                      // Agregar la carta del producto al contenedor de productos
                      contenedorProductos.append(cartaProducto);
                  }
              }
          }
      }
  });
}

// Función para filtrar las cartas de producto al hacer clic en el ícono de búsqueda
function filtrarTarjetas2() {
  let filtro = $("#inputBusqueda").val();
  cargarYFiltrarProductos(filtro);
}

// Cargar los productos al inicio
$(document).ready(function () {
  cargarYFiltrarProductos("");
});

});