$(document).ready(function(){

    //Bandeja apertura
    $("#img-usuario-navbar").on("click", function(){
        $("#bandeja").animate({right : 0}, 500)
        $("#caja-opacidad-apertura-bandeja").animate({right : 0}, 5)
    })
    

    //bandeja cierre
    $("#boton-cerrar-bandeja").on("click", function(){
        $("#bandeja").animate({right : -480}, 500)
        $("#caja-opacidad-apertura-bandeja").animate({right : -5000}, 5)
    })

    $("#caja-opacidad-apertura-bandeja").on("click", function(){
        $("#bandeja").animate({right : -480}, 500)
        $("#caja-opacidad-apertura-bandeja").animate({right : -5000}, 5)
    })

    //Bandeja categorias inicio-comprador

    $('#caja-categorias').hide()

    var hoverTimeout;
  
    $('#boton-categorias-inicio-comprador').mouseenter(function() {
        clearTimeout(hoverTimeout);
        $('#caja-categorias').slideDown();
    }).mouseleave(function() {
        hoverTimeout = setTimeout(function() {
            $('#caja-categorias').slideUp();
        }, 300);
    });
    
    $('#caja-categorias').mouseenter(function() {
        clearTimeout(hoverTimeout);
    }).mouseleave(function() {
        $('#caja-categorias').slideUp();
    });
    

    //Popover inicializacion
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    //Funciones para cantidad de productos en items carrito botones cantidad
    let input = document.getElementById("cantidad-producto") 

    $("#restar-producto").on("click", function(){
        let cantidad = parseInt(input.value)

        if(cantidad > 1){
            cantidad -= 1
            input.value = cantidad
        }
    })

    $("#sumar-producto").on("click", function(){
        let input = document.getElementById("cantidad-producto")

        let cantidad = parseInt(input.value)

        if(cantidad >= 1){
            cantidad += 1
            input.value = cantidad
        }
    })

    //bandeja menu responsive
    $("#boton-hamburguesa").on("click", function(){
        $("#bandeja-menu-navegacion").animate({right : 0}, 500)
    })

    $("#cerrar-bandeja-menu").on("click", function(){
        $("#bandeja-menu-navegacion").animate({right : -477}, 500)
    })
    
})