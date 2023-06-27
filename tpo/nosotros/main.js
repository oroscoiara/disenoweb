
$(function () {

    $(".marcas").hide(); // esconder desde el principio las marcas

    $(".boton").click(function () {
        alert("Estas listo para la mejor experiencia gastronomica?") // alerta al intentar ir a pedir 
    });

    $(".boton-marcas").click(function () {
        $(".marcas").show(500); // mostrar marcas al tocar boton
        $('.marcas').animate({ // le da animacion al aparecer los elementos
            left: '+=1px',
            opacity: 1,
            fontSize: '20px'
        }, 500);
    });

    $('.parrafos').animate({ // todos los parrafos se animan tambien
        left: '+=100px',
        opacity: 1,
        fontSize: '30px'
    }, 2000);


    // animacion de tipeo en vivo

    $('.parrafos1').css('font-size', '25px');
    $('.parrafos1').css('text-align', 'center');

    var text = ' creemos que nuestros cocineros son la clave del exito en el negocio. Por eso, hemos reunido a los mejores cocineros de hamburguesas de la ciudad para llevarte la mejor experiencia gastronomica a la puerta de tu casa'
    var index = 0;

    function typeText() {
        $('.parrafos1').append(text.charAt(index));
        index++;
        if (index < text.length) {
            setTimeout(typeText, 100);
        }
    }

    typeText();

});
