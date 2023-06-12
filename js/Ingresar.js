$(document).ready(function(){

    $('#ingresar').on('click', function(){
        let documento = $("#documento").val();
        let password = $("#contraseña").val();

        console.log(documento + " " + password)

        let datos = {
            "documento" : documento,
            "contraseña" : password
        }

        let datosEnviar = JSON.stringify(datos)

        $.ajax({
            url : "http://localhost:8080/Ingresar",
            type : "GET",
            dataType : "JSON",
            data : datosEnviar,
            success : function(respuesta){

                alert("Hola")

                if(respuesta.rol_Id == 1){
                    window.location.href= "inicioComprador.html"
                }else if(respuesta.rol_Id == 2){
                    window.location.href= "camp_producto.html"
                }else if(respuesta.rol_Id == 3){
                    window.location.href= "camp_producto.html"
                }else if(respuesta.rol_Id == 4){
                    window.location.href = "/Frames/Administrador_Productos.html"
                }
            }
        });
    })

})