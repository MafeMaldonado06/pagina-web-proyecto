$(document).ready(function(){

    function setSession(documento){
        window.sessionStorage.setItem("id_usuario", documento)
    }

    function onSession(){
        if(window.sessionStorage.getItem("id_usuario") != null){
            return true
        }else{
            return false
        }
    }

    function closeSession(){
        window.sessionStorage.removeItem("id_usuario")

        let sesion =  onSession()
        console.log(sesion)

        if(sesion == false){
            window.location.href = "/Frames/Formulario_Ingreso.html"
        }
    }

    $('#ingresar').on('click', function(){

        var documento = $("#documento").val()
        var contraseña = $("#contraseña").val()

        setSession(documento);

        $.ajax({
            url : 'http://localhost:8080/Ingresar/' + documento + '/' + contraseña ,
            type : "GET",
            dataType : "JSON",
            success : function(respuesta){

                if(respuesta.rol_Id == 1){
                    window.location.href= "/Frames/Comprador_Inicio.html"
                }else if(respuesta.rol_Id == 2){
                    window.location.href= "/Frames/Campesino_Productos.html"
                }else if(respuesta.rol_Id == 3){
                    window.location.href= "camp_producto.html"
                }else if(respuesta.rol_Id == 4){
                    window.location.href = "/Frames/Administrador_Productos.html"
                }
            }
        });
    })


    //datos bandeja NO BORRAR
    $("#img-usuario-navbar").on('click', function(){
        
        /* let bandeja = document.getElementById("bandeja") */

        let nombre = document.getElementById('nombre-usuario')
        let apellido = document.getElementById('apellido-usuario')
        let documento = document.getElementById('documento-usuario')
        let correo = document.getElementById('correo-usuario')
        let celular = document.getElementById('celular-usuario')
        let telefono = document.getElementById('telefono-usuario')
        let departamento = document.getElementById('departamento-usuario')
        let ciudad = document.getElementById('ciudad-usuario')
        let direccion = document.getElementById('direccion-usuario')
        let rol = document.getElementById('rol-usuario')

        var sesion = window.sessionStorage.getItem("id_usuario")

        $.ajax({
            url : 'http://localhost:8080/DatosSesion/' + sesion,
            type : 'GET',
            dataType : "JSON",
            success : (respuesta) =>{

                nombre.innerHTML = respuesta.usu_Nombre
                apellido.innerHTML = respuesta.usu_Apellidos
                documento.innerHTML = respuesta.usu_Documento
                correo.innerHTML = respuesta.usu_Correo
                celular.innerHTML = respuesta.usu_Celular
                telefono.innerHTML = respuesta.usu_Telefono
                departamento.innerHTML = respuesta.usu_Departamento.dep_Nombre
                ciudad.innerHTML = respuesta.usu_Ciudad.mun_Nombre
                direccion.innerHTML = respuesta.usu_Direccion
                rol.innerHTML = respuesta.usu_Rol.rol_Nombre

                /* bandeja.innerHTML = '<div class="d-flex justify-content-end"><i class="icono-cerrar-bandeja bi bi-x-lg me-4" id="boton-cerrar-bandeja"></i></div><div class="d-flex flex-column align-items-center"><div class="contenedor-img-usuario-bandeja d-flex justify-content-center align-items-center"><div class="usuario-img bg-info"><img src="/Img/pexels-bruno-salvadori-2330169.jpg" alt="">div></div><h2>' + respuesta.usu_Nombre + '</h2><h5>' + respuesta.usu_Apellidos + '</h5></div><div class="d-flex justify-content-center"><hr class="w-75"></div><div class="d-flex ps-5 my-2"><ul class="datos-usuario-bandeja list-unstyled w-75"><li class=""><span class="tutilo-dato-usuario-bandeja">Documento:</span> <span>'+ respuesta.usu_Documento + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Coreo electronico:</span> <span>' + respuesta.usu_Correo + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Celular:</span> <span>' + respuesta.usu_Celular + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Telefono:</span> <span>' + respuesta.usu_Telefono + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Departamento:</span> <span>' + respuesta.usu_Departamento.dep_Nombre + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Ciudad:</span> <span>' + respuesta.usu_Ciudad.mun_Nombre + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Direccion:</span> <span>' + respuesta.usu_Direccion + '</span></li><li><span class="tutilo-dato-usuario-bandeja">Rol:</span> <span>' + respuesta.usu_Rol.rol_Nombre + '</span></li></ul></div><div class="botones-bandeja d-flex justify-content-center"><button class="btn btn-success">Actualizar datos</button><button class="btn btn-secondary">Cerrar sesión</button></div></div>' */
            }
        })
    })

    $("#cerrar-sesion").on('click', function(){
        closeSession()
    })

})