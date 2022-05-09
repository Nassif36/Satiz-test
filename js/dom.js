window.addEventListener('DOMContentLoaded', ()=>{





     let i = 0;
     let text = "Las mejores caps encontralas en ebrand by k";
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

let siteNavigation = document.getElementById("site-navigation");
let sidebar = document.getElementById("mySidenav");
let siteMain = document.getElementById("main")

function openNav() {
    sidebar.style.width = "250px";
    siteMain.style.marginRight = "150px";
    siteNavigation.style.marginRight = "250px";

}

/* Set the width of the side navigation to 0 and the Right margin of the page content to 0, and the background color of body to white */
function closeNav() {
    sidebar.style.width = "0";
    siteMain.style.marginRight = "0";
    siteNavigation.style.marginRight = "0";

}

