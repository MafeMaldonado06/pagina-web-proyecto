$(document).ready(function() {

    /* ROL SELECT */

    // Obtén una referencia al elemento <select>
    var select3 = document.getElementById("rol");

    // Crea una nueva instancia del objeto XMLHttpRequest
    var xhr3 = new XMLHttpRequest();

    // Define la función de callback para manejar la respuesta AJAX
    xhr3.onreadystatechange = function() {
      if (xhr3.readyState === 4 && xhr3.status === 200) {
        // Analiza la respuesta JSON
        var datos3 = JSON.parse(xhr3.responseText);
        
        // Rellena el <select> con los datos recibidos
        for (var r = 0; r < datos3.length; r++) {
          var opcion3 = document.createElement("option");
          opcion3.text = datos3[r].rol_Nombre;
          opcion3.value = datos3[r].rol_Id;
          select3.add(opcion3);
        }
      }
    };

    // Abre una conexión AJAX y envía la solicitud
    xhr3.open("GET", "http://localhost:8080/ListarRoles", true);
    xhr3.send();


    $('#registrar').on('click', function() {

      var rol = $('#rol').val(); 
      var departamento = $('#departamento').val();
      var ciudad =  $('#ciudad').val();
      // Obtener el valor seleccionado del rol del select
  
      var datos = {
        usu_Documento: $('#documento').val(),
        usu_Nombre: $('#nombre').val(),
        usu_Apellidos: $('#apellido').val(),
        usu_Correo: $('#correo').val(),
        usu_Celular: $('#celular').val(),
        usu_Img:null,             
        usu_Telefono:$('#telefono').val(),
        usu_Direccion: $('#direccion').val(),
        usu_Contrasena: $('#contraseña').val(),
        usu_Rol : null
      };
  
      console.log(datos);
      console.log(rol);
      console.log(departamento);
      console.log(ciudad);
      var datosEnvio = JSON.stringify(datos);
      console.log(datosEnvio);
  
      $.ajax({
        url: "http://localhost:8080/AgregarUsuario",
        type: "POST",
        data: datosEnvio,
        contentType: "application/JSON",
        success: function(respuesta) {
          alert(respuesta);
          if (rol == 1) {      /* Comprador */
          window.location.href = "../Frames/Comprador_Inicio.html";
        } else if (rol == 2) {     /* Campesino */
          window.location.href = "../Frames/Campesino_Productos.html"
        } else if (rol == 4) {     /* Administrador */
          window.location.href = "../Frames/Administrador_Productos.html"
        } else if (rol == 3) {     /*   Transportador */
         /*  window.location.href = "../Frames/Campesino_Productos.html" */
        }
        },
        error: function(xhr, status, error) {
          // Maneja el error de la solicitud
        }
      });
    });
    
});