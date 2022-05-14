window.addEventListener('DOMContentLoaded', () => {

    class Productos {
        constructor(id,categoria,titulo, descripcion, precio, url) {
            this.id = parseInt(id);
            this.categoria = categoria;
            this.titulo = titulo.toUpperCase();
            this.descripcion = descripcion;
            this.precio =precio
            this.url = url;
            

        }
   
   

    }


    let productos = [];

    productos.push(new Productos(1,"Indumentaria","Gorrita blanca", "Descripcion", 25, "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"))

    productos.push(new Productos(2,"Indumentaria","Gorrito blanca", "Descripcion", 55,"https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos(3,"Indumentaria","Gorrito", "Descripcion", 105,"https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos(4,"Indumentaria","Gorrito", "Descripcion", 105,"https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos(5,"Indumentaria","Gorrito","Descripcion", 105, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"))

    productos.push(new Productos(6, "Accesorios", "lente", "Descripcion", 35, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"))

    productos.push(new Productos(7,"Accesorios", "lente", "Descripcion", 55, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"))

    productos.push(new Productos(8,"Accesorios", "lente", "Descripcion", 35, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"))

    console.log(productos);
        
    productos.sort((a, b) => a.id - b.id);

    let Accesorios = productos.filter((producto) => producto.categoria == "Accesorios");
    let Indumentaria = productos.filter((producto) => producto.categoria == "Indumentaria");

    
    function renderProductos(arrayProductos) {
        let productosHTML = '';

        for (const producto of arrayProductos) {
                 
            productosHTML = productosHTML + `

                <li class="producto">
                    <img src=${producto.url}>
                <div class="producto-texto">
                        <p class="producto-titulo">${producto.titulo}</p>
                        <p>${producto.id}</p>
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

    }   

            //  renderProductos(productos);
   
        let filtroAccesorios = document.getElementById('glasses');
        filtroAccesorios.addEventListener('click', function(){
            renderProductos(Accesorios)
        });


        let filtroIndumentaria = document.getElementById('gorritos');
        filtroIndumentaria.addEventListener('click', function(){
            renderProductos(Indumentaria)
        });

    console.log(Accesorios);
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