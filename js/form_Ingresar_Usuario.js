$(document).ready(function() {
    $('#Enviar').on('click', function() {

      var rol = $('#rol').val(); // Obtener el valor seleccionado del select
  
      var datos = {
        usu_Documento: $('#documento').val(),
        usu_Nombre: $('#nombre').val(),
        usu_Apellidos: $('#apellido').val(),
        usu_Correo: $('#correo').val(),
        usu_Celular: $('#celular').val(),
        usu_Img:null,
        usu_Telefono:$('#telefono').val(),
        usu_Departamento: $('#departamento').val(),
        usu_Ciudad: $('#municipio').val(),
        usu_Direccion: $('#direccion').val(),
        usu_Contrasena: $('#contraseña').val(),

        // No es necesario incluir el rol en el objeto de datos, ya que se pasará en la URL
      };
  
      console.log(datos);
      var datosEnvio = JSON.stringify(datos);
      console.log(datosEnvio);
  
      $.ajax({
        url: "http://localhost:8080/AgregarUsuario/" + rol,
        type: "POST",
        data: datosEnvio,
        contentType: "application/JSON",
        success: function(respuesta) {
          alert(respuesta);
          if (rol == 1) {      /* Comprador */
          window.location.href = "http://127.0.0.1:5500/pagina-web-proyecto/inicioComprador.html";
        } else if (rol == 2) {     /* Campesino */
          window.location.href = "http://127.0.0.1:5500/pagina-web-proyecto/camp_producto.html";
        }
        }
      });
    });
    
});
  