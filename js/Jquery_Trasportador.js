$(document).ready(function(){
    $("#btn_img5").click(function(){
        $("#bandeja").animate({right : 0}, 500)
    })

    $("#btn-cerrar").on("click", function(){
        $("#bandeja").animate({right : -300}, 500)
    })
})

