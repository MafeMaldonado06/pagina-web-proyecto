$(document).ready(function(){
    

/* FILTRAR PRODUCTOS */
    $('#enviar_filtro').on('click', function(){

        let filtroSelect = document.getElementById("filtrar");
        let categoriaSeleccionada = filtroSelect.value;

        // Hacer la solicitud AJAX
        let xhr = new XMLHttpRequest();

        if (categoriaSeleccionada == 1){
            xhr.open("GET", "http://localhost:8080/Frutas", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                mostrarDatosEnTarjetas(datos);
                }
            };
            xhr.send();
        }
        else if (categoriaSeleccionada == 2){
            xhr.open("GET", "http://localhost:8080/Verduras", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                mostrarDatosEnTarjetas(datos);
                }
            };
            xhr.send();
        }
        else if(categoriaSeleccionada ==3){
            xhr.open("GET", "http://localhost:8080/Legumbres", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                mostrarDatosEnTarjetas(datos);
                }
            };
            xhr.send();
        }
        
    });

/* AGREGAR PRODUCTO NUEVO */

    $('#publicarproducto').on('click', function(){

        var datos = {
            det_Img:null,
            det_Nombre_product: $('#nombre').val(),
            det_Categoria: $('#categoria').val(),
            det_precio: parseInt($('#precio').val()),
            det_cantidad: parseInt($('#cantidad').val()),
        };

        console.log(datos);
        var datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);

        $.ajax({
            url: "http://localhost:8080/AgregarProducto" + documento,
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
        })
        
    });

/* ACTUALIZAR PRODUCTO */

    $('#actualizarproducto').on('click', function(){

        var det_referencia = S('referencia').val();

        var datos = {
            det_Nombre_product: $('#nombre').val(),
            det_Img:null,
            det_precio: $('#precio').val(),
            det_cantidad: $('#cantidad').val(),
            det_Categoria: $('#categoria').val(),
        };

        console.log(datos);
        var datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);

        $.ajax({
            url: "http://localhost:8080/ActualizarProducto" + det_referencia + documento,
            type: "PUT",
            data: datosEnvio,
            contentType: "application/JSON",})
    });

/* LISTAR PRODUCTOS */

    /* tarjetas */
    function cargarDatosTarjetas() {
        let tarjetasContainer = document.getElementById("tarjetasContainer");
        // Realiza la llamada AJAX para obtener los datos
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/ListarProductosCampesino" + documento, true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var datos = JSON.parse(xhr.responseText);
            mostrarDatosEnTarjetas(datos);
        }
        };
        
        xhr.send();
    }
    // Función para mostrar los datos en las tarjetas
    function mostrarDatosEnTarjetas(datoss) {
        // Iterar sobre los datos y crear una tarjeta para cada uno
        datoss.forEach(function(datos) {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("carta-producto", "card", "shadow");
    
        let imagenDiv = document.createElement("div");
        imagenDiv.classList.add("d-flex", "justify-content-center", "my-3");
    
        let imagenProducto = document.createElement("img");
        imagenProducto.src = datos.det_Img; 
        imagenProducto.classList.add("d-block", "w-100");
        imagenDiv.appendChild(imagenProducto);
    
        tarjeta.appendChild(imagenDiv);
    
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
    
        let ul = document.createElement("ul");
        ul.classList.add("list-unstyled", "text-center");
    
        let nombreLi = document.createElement("li");
        let nombreProducto = document.createElement("h3");
        nombreProducto.classList.add("text-success");
        nombreProducto.id = "nomproducto";
        nombreProducto.textContent = datos.det_Nombre_product; 
        nombreLi.appendChild(nombreProducto);
        ul.appendChild(nombreLi);
    
        let precioLi = document.createElement("li");
        let precioProducto = document.createElement("span");
        precioProducto.id = "precioproducto";
        precioProducto.textContent = datos.det_precio; 
        precioLi.appendChild(precioProducto);
        ul.appendChild(precioLi);
    
        let cantidadLi = document.createElement("li");
        let cantidadProducto = document.createElement("span");
        cantidadProducto.id = "cantproducto";
        cantidadProducto.textContent = datos.det_cantidad; 
        cantidadLi.appendChild(cantidadProducto);
        ul.appendChild(cantidadLi);
    
        cardBody.appendChild(ul);
    
        let verMasDiv = document.createElement("div");
        verMasDiv.classList.add("d-flex", "justify-content-center");
    
        let verMasButton = document.createElement("button");
        verMasButton.classList.add("boton-verMas-cartaProducto");
        verMasButton.setAttribute("data-bs-toggle", "modal");
        verMasButton.setAttribute("data-bs-target", "#vermas");
        verMasButton.innerHTML = '<span>Ver más</span>';
    
        verMasDiv.appendChild(verMasButton);
        cardBody.appendChild(verMasDiv);
    
        tarjeta.appendChild(cardBody);
    
        tarjetasContainer.appendChild(tarjeta);
        });
  }


/* DESPACHOS */

    /* BUSCADOR DESPACHOS */
    //revisar
    let inputBuscar = document.querySelector(".buscador input");
    inputBuscar.addEventListener("input", buscarDatos);

    function buscarDatos() {
        let inputValor = document.querySelector(".buscador input").value.trim().toLowerCase();
        let tabla = document.getElementById("tabladespachos");
        let filas = tabla.getElementsByTagName("tr");
      
        for (let i = 1; i < filas.length; i++) {
          let numeroCompra = filas[i].cells[0].textContent.trim().toLowerCase();
          if (numeroCompra.includes(inputValor)) {
            filas[i].style.display = "table-row";
          } else {
            filas[i].style.display = "none";
          }
        }
      }

    /* TABLA DESPACHOS */
    function cargarDatosTabla() {
        // Hacer la solicitud AJAX
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/OrdenCompra", true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            let datos = JSON.parse(xhr.responseText);
            actualizarTabla(datos);
          }
        };
        xhr.send();
      }
    
      function actualizarTabla(datos) {
        // Obtén una referencia a la tabla
        let tabla = document.getElementById("tabladespachos");
      
        // Elimina las filas existentes en la tabla (excepto la primera fila de encabezado)
        while (tabla.rows.length > 1) {
          tabla.deleteRow(1);
        }
      
        // Itera sobre los datos y agrega las filas a la tabla
        datos.forEach(function(dato) {
          let fila = tabla.insertRow();
      
          let numeroCompra = fila.insertCell();
          numeroCompra.textContent = dato.OrdC_Id; 
      
          let nombreTransportador = fila.insertCell();
          nombreTransportador.textContent = dato.Usu_Nombre; 
      
          let cantidadSolicitada = fila.insertCell();
          cantidadSolicitada.textContent = dato.OrdC_Cantcomprada; 
      
          let fechaCompra = fila.insertCell();
          fechaCompra.textContent = dato.Fac_FechaVenta; 
      
          let fechaDespacho = fila.insertCell();
          fechaDespacho.textContent = dato.Fac_FechaVenta; 
      });
    }
    window.addEventListener("load", function() {
        cargarDatosTabla();
        cargarDatosTarjetas();
      });
      
});