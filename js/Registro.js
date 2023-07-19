$(document).ready(function() {

  $('#registrar').on('click', function() {
    var rol = $('#rol').val();
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
      usu_Rol : rol,
    };

    console.log(datos);
    var datosEnvio = JSON.stringify(datos);
    console.log(datosEnvio);

    $.ajax({
      url: "http://localhost:8080/AgregarUsuario",
      type: "POST",
      data: datosEnvio,
      contentType: "application/JSON",
      success: function(respuesta) {
        alert(respuesta);
        if (rol == 'Comprador') {      /* Comprador */
        window.location.href = "../Frames/Comprador_Inicio.html";
      } else if (rol == 'Campesino') {     /* Campesino */
        window.location.href = "../Frames/Campesino_Productos.html"
      } else if (rol == 'Transportador') {     /*   Transportador */
       /*  window.location.href = "../Frames/Campesino_Productos.html" */
      }
      },
      error: function(xhr, status, error) {
        // Maneja el error de la solicitud
      }
    });
  });
  
});