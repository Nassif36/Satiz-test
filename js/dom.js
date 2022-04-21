let i = 0;
let text = "  SATIZ es una variación del latín satis que significa bastante o suficiente y que da origen al verbo SACIAR Somos una pyme comercializadora y distribuidora de frutos secos, legumbres, semillas y algunos de susderivados.Nuestro objetivo principal es mejorar el bienestar de nuestros clientes llevando productos frescos y nutritivos a la comodidad de sus hogares En satiz nos esforzamos para optimizar el día a día de nuestros clientes, brindándoles la mejor relación calidad - precio en formatos amigables con el medio ambiente ";
let speed = 35;

function typeWriter(button) {
    // console.log(button.id);

    if (i < text.length) {
        document.getElementById("demo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()