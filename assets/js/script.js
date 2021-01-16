$(function(){
    $("a").click(function(event) {
        if (this.hash !=="") {
            event.preventDefault();
            var gato = this.hash;
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });
        }
    });
        /* Intento fallido de animacion de menu hamburguesa
        $("#slide_nav_button").click(function(){
            $('#slide_menu').animate({width:'toggle'},300);
        });
    */
});
