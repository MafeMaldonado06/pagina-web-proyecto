$(document).ready(function(){

    $('#Iniciar').on("click", function(){
        let documento = $("#documentos").val();
        let password = $("#contraseña").val();

        $.ajax({
            url : "http://localhost:8080/Ingresar/" + documento + "/" + password,
            type : "GET",
            dataType : "JSON",
            success : function(respuesta){
                if(respuesta.rol_Id == 1){
                    window.location.href= "inicioComprador.html"
                }
            }
        });
    })

})