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

});

let siteNavigation = document.getElementById("site-navigation");
let sidebar = document.getElementById("mySidenav");
let siteMain = document.getElementById("main")
let sidebarOpen = document.getElementById("sidebar-open");

function openNav() {
    sidebar.style.width = "250px";
    siteMain.style.marginRight = "150px";
    siteNavigation.style.marginRight = "250px";
    sidebarOpen.style.opacity = "0"
}

/* Set the width of the side navigation to 0 and the Right margin of the page content to 0, and the background color of body to white */
function closeNav() {
    sidebar.style.width = "0";
    siteMain.style.marginRight = "0";
    siteNavigation.style.marginRight = "0";
    sidebarOpen.style.opacity = "1"
}

let carritoNavigation = document.getElementById("carrito-navigation");

let sidebarCarrito = document.getElementById("sidebarcarrito");

let carritoOpen = document.getElementById("carrito-open");

function openCarro() {
    sidebarCarrito.style.width = "250px";
    siteMain.style.marginRight = "150px";
    siteNavigation.style.marginRight = "250px";
    carritoOpen.style.opacity = "0"
}

/* Set the width of the side navigation to 0 and the Right margin of the page content to 0, and the background color of body to white */
function closeCarro() {
    sidebarCarrito.style.width = "0";
    siteMain.style.marginRight = "0";
    siteNavigation.style.marginRight = "0";
    carritoOpen.style.opacity = "1"
}
