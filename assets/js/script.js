$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente");
    });
    
    $("#fondoIcon1").click(function () {
        $(".parrafo1").toggle();
    });
    $("#fondoIcon2").click(function () {
        $(".parrafo2").toggle();
    });
    $("#fondoIcon3").click(function () {
        $(".parrafo3").toggle();
    });
    $("h2").click(function () {
        $(this).css({
            "color": "#0dcaf0"
        });
    });

});