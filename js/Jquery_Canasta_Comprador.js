$(document).ready(function(){
    $("#btn_img_carrito").click(function(){
        $("#bandeja2").animate({right : 0}, 500)
    })

    $("#btn-cerrar2").on("click", function(){
        $("#bandeja2").animate({right : -300}, 500)
    })
})