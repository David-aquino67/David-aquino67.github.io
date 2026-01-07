$(document).ready(function() {
    const album = $("#a");

    album.turn({
        width: 700,
        height: 500,
        autoCenter: true,    // Esto ayuda a que turn.js maneje el espacio
        display: 'double',
        acceleration: true,
        elevation: 50,
        gradients: true,
        duration: 1000,
        when: {
            // Este evento se dispara cada vez que cambias de página
            turning: function(event, page, view) {
                if (page == 1) {
                    // Si volvemos a la portada, nos aseguramos que el diseño se sienta "cerrado"
                    $(this).removeClass('abierto');
                } else {
                    $(this).addClass('abierto');
                }
            }
        }
    });

    // Abrir al hacer clic en la portada
    $(".portada").on("click", function() {
        album.turn("next");
    });

    // Botones inferiores
    $("#next").on("click", function() { album.turn("next"); });
    $("#prev").on("click", function() { album.turn("previous"); });

    // Teclado
    $(window).bind('keydown', function(e) {
        if (e.keyCode === 37) album.turn('previous');
        else if (e.keyCode === 39) album.turn('next');
    });
});