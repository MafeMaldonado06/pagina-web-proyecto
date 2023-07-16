$(document).ready(function(){

    /* ULTIMOS PEDIDOS */

    fetch("http://localhost:8080/OrdenCompra",true)
    .then(response => response.json())
    .then(data => mostrarPedidos(data))
    .catch(error => console.error("Error al obtener los últimos pedidos:", error));

    function mostrarPedidos(data) {
        const tabla = document.getElementById("tablaPedidos");
        tabla.innerHTML = ""; // Limpiar el contenido de la tabla
      
        data.forEach(pedido => {
          const fila = document.createElement("tr");
      
          const noCompra = document.createElement("td");
          noCompra.textContent = pedido.OrdC_Id;
          fila.appendChild(noCompra);
      
          const tomaPedido = document.createElement("td");
          tomaPedido.textContent = pedido.Fac_FechaVenta;
          fila.appendChild(tomaPedido);
      
          const botonConsultar = document.createElement("td");
          const boton = document.createElement("button");
          boton.textContent = "Consultar";
          boton.className = "boton-tabla-pedidos py-1 btn btn-success";
          boton.addEventListener("click", function() {
            // Lógica para consultar el pedido
            // NOSE QUE PONER ACA
            
          });
          botonConsultar.appendChild(boton);
          fila.appendChild(botonConsultar);
      
          const estado = document.createElement("td");
          estado.textContent = pedido.estado; // no esta aun el metodo del estado
          fila.appendChild(estado);
      
          tabla.appendChild(fila);
        });
      }
    
    /* BUSCADOR */

    const inputBuscar = document.querySelector(".buscador input");
    inputBuscar.addEventListener("input", filtrarTarjetas());

    function filtrarTarjetas() {
      const inputValor = inputBuscar.value.trim().toLowerCase();
      const tarjetas = document.querySelectorAll(".carta-producto-comprador");
    
      tarjetas.forEach(tarjeta => {
        const nombreProducto = tarjeta.querySelector("h5").textContent.trim().toLowerCase();
    
        if (nombreProducto.includes(inputValor)) {
          tarjeta.style.display = "block";
        } else {
          tarjeta.style.display = "none";
        }
      });
    }

    window.addEventListener("DOMContentLoaded", filtrarTarjetas);

    /* LISTAR PRODUCTOS */

    function cargarDatosTarjetas() {
      let tarjetasContainer = document.getElementById("tarjetasContainer");
      // Realiza la llamada AJAX para obtener los datos    
      $.ajax({
        url: "http://localhost:8080/ListarProductos",
        dataType: "json",
        success: function(datos) {
          mostrarDatosEnTarjetas(datos);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error("Error al cargar los productos:", textStatus, errorThrown);
        }
      });
    }

    function mostrarDatosEnTarjetas(datos) {
      datos.forEach(function(datos) {
        let tarjeta = $("<div>").addClass("carta-producto", "card", "shadow");
    
        let imagenDiv = $("<div>").addClass("d-flex justify-content-center my-3");
        let imagenProducto = $("<img>").attr("src", datos.det_Img).addClass("d-block w-100");
        imagenDiv.append(imagenProducto);
        tarjeta.append(imagenDiv);
    
        let cardBody = $("<div>").addClass("card-body");
    
        let ul = $("<ul>").addClass("list-unstyled text-center");
    
        let nombreLi = $("<li>");
        let nombreProducto = $("<h3>").addClass("text-success").attr("id", "nomproducto").text(datos.det_Nombre_product);
        nombreLi.append(nombreProducto);
        ul.append(nombreLi);
    
        let precioLi = $("<li>");
        let precioProducto = $("<span>").attr("id", "precioproducto").text(datos.det_precio);
        precioLi.append(precioProducto);
        ul.append(precioLi);
    
        let cantidadLi = $("<li>");
        let cantidadProducto = $("<span>").attr("id", "cantproducto").text(datos.det_cantidad);
        cantidadLi.append(cantidadProducto);
        ul.append(cantidadLi);
    
        cardBody.append(ul);
    
        let verMasDiv = $("<div>").addClass("d-flex justify-content-center");
        let verMasButton = $("<button>").addClass("boton-verMas-cartaProducto").attr("data-bs-toggle", "modal").attr("data-bs-target", "#vermas").html('<span>Ver más</span>');
        verMasDiv.append(verMasButton);
        cardBody.append(verMasDiv);
    
        tarjeta.append(cardBody);
    
        tarjetasContainer.append(tarjeta);
      });
    }
       
    cargarDatosTarjet

    cargarDatosTar
    cargarDatosTarjetas();

    /* LISTARMAS VENDIDOS */

    function cargarDatosTarjetas2() {
      let tarjetasContainer2 = document.getElementById("tarjetasContainer2");
      // Realiza la llamada AJAX para obtener los datos    
      $.ajax({
        url: "http://localhost:8080/ListarProductos",
        dataType: "json",
        success: function(datoss) {
          mostrarDatosEnTarjetas(datoss);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error("Error al cargar los productos:", textStatus, errorThrown);
        }
      });
    }

    function mostrarDatosEnTarjetas2(datoss) {
      datos.forEach(function(datoss) {
        let tarjeta2 = $("<div>").addClass("carta-producto", "card", "shadow");
    
        let imagenDiv2 = $("<div>").addClass("d-flex justify-content-center my-3");
        let imagenProducto2 = $("<img>").attr("src", datoss.det_Img).addClass("d-block w-100");
        imagenDiv2.append(imagenProducto2);
        tarjeta2.append(imagenDiv2);
    
        let cardBody2 = $("<div>").addClass("card-body");
    
        let ul2 = $("<ul>").addClass("list-unstyled text-center");
    
        let nombreLi2 = $("<li>");
        let nombreProducto2 = $("<h3>").addClass("text-success").attr("id", "nomproducto").text(datoss.det_Nombre_product);
        nombreLi2.append(nombreProducto2);
        ul2.append(nombreLi2);
    
        let precioLi2 = $("<li>");
        let precioProducto2 = $("<span>").attr("id", "precioproducto").text(datoss.det_precio);
        precioLi2.append(precioProducto2);
        ul2.append(precioLi2);
    
        let cantidadLi2 = $("<li>");
        let cantidadProducto2 = $("<span>").attr("id", "cantproducto").text(datoss.det_cantidad);
        cantidadLi2.append(cantidadProducto2);
        ul2.append(cantidadLi2);
    
        cardBody2.append(ul2);
    
        let verMasDiv2 = $("<div>").addClass("d-flex justify-content-center");
        let verMasButton2 = $("<button>").addClass("boton-verMas-cartaProducto").attr("data-bs-toggle", "modal").attr("data-bs-target", "#vermas").html('<span>Ver más</span>');
        verMasDiv2.append(verMasButton2);
        cardBody2.append(verMasDiv2);
    
        tarjeta2.append(cardBody2);
    
        tarjetasContainer2.append(tarjeta2);
      });
    }
       
    cargarDatosTarjet2

    cargarDatosTar2
    cargarDatosTarjetas2();

/* FRUTAS */

    /* LISTAR FRUTAS */

    $.ajax({
      url: "http://localhost:8080/Frutas",
      Type: "GET",
      dataType: "json",
      success: function(data) {
        mostrarProductosFruta(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error al cargar los productos:", textStatus, errorThrown);
      }
    });
    
    function mostrarProductosFruta(data) {
      const tarjetas = $(".carta-producto-categoria-fruta");
      
      data.forEach((producto, index) => {
        const tarjeta = tarjetas.eq(index);
        const img = tarjeta.find("img");
        const h5 = tarjeta.find("h5");
        const span = tarjeta.find("span");
        img.attr("src", producto.det_Img);
        h5.text(producto.det_Nombre_product);
        span.text(producto.det_precio);
      });
    }
    
    /* BUSCADOR FRUTAS */

    const inputBuscar2 = document.querySelector(".buscador input");
    inputBuscar2.addEventListener("input", filtrarTarjetas2());

    function filtrarTarjetas2() {
      const inputValor2 = inputBuscar2.value.trim().toLowerCase();
      const tarjetas2 = document.querySelectorAll(".carta-producto-comprador");
    
      tarjetas2.forEach(tarjeta2 => {
        const nombreProducto2 = tarjeta2.querySelector("h5").textContent.trim().toLowerCase();
    
        if (nombreProducto2.includes(inputValor2)) {
          tarjeta2.style.display = "block";
        } else {
          tarjeta2.style.display = "none";
        }
      });
    }
});