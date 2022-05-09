window.addEventListener('DOMContentLoaded', () => {

    class Productos {
        constructor(titulo, descripcion, precio, url) {
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.precio = precio
            this.url = url;

        }


    }


    const productos = [];

    productos.push(new Productos("Gorrita blanca", "Descripcion", 25, "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"))

    productos.push(new Productos("Gorrito seven zero", "Descripcion", 55, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos("Producto3", "Descripcion", 105, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos("Producto4", "Descripcion", 105, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos("Producto5", "Descripcion", 105, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))


    console.log(productos);


    let productosHTML = '';

    for (const producto of productos) {

        productosHTML = productosHTML + `
    
        <li class="producto">
            
            <img src=${producto.url}>
           <div class="producto-texto">
            <p class="producto-titulo">${producto.titulo}</p>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <div class="compra-botones">
                <button class="btn btn-comprar">Añadir al carrito</button>
                <span>$${producto.precio}</span>
            </div>
           
            </div>
        </li>
    
    
    
    `
        document.getElementById('productos').innerHTML = productosHTML;
    }

    var carrito = document.getElementById('carrito')
    carrito.innerHTML = 0;
    var carritoArray = [];


    const botonAgregar = document.querySelectorAll('.btn-comprar');

    
    botonAgregar.forEach(el => {
        el.addEventListener('click', function () {
            carritoArray.push(el.parentNode.parentElement)
            console.log(carritoArray);
            console.log(el.parentNode.parentElement);
            carrito.innerHTML = carritoArray.length;
        });
    });
    console.log(carritoArray);
    


});