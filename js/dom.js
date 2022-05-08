window.addEventListener('DOMContentLoaded', ()=>{

     let i = 0;
     let text = "%%%%%50 OFF Con el codigo k-coder%%%%%";
     let speed = 35;

     function typeWriter(n) {


         if (i < text.length) {
             document.getElementById("demo").innerHTML += text.charAt(i);
             i++;
             setTimeout(typeWriter, speed);
         }
     }

     typeWriter()
     let funcion = function () {
        
         let evento = event.target.className;

        if (evento == 'fas fa-home') {
            alert('clickeaste el home')
        } else if(evento == 'fa-solid fa-cart-shopping') {
            alert('clickeaste el carrito')
        }
     }
     let iconosClick = document.getElementById('iconos-barra');
     iconosClick.addEventListener('click', funcion);


     




});