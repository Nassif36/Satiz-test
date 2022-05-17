window.addEventListener('DOMContentLoaded', () => {

    class Productos {
        constructor(id, categoria, titulo, descripcion, precio, img) {
            this.id = parseInt(id);
            this.categoria = categoria;
            this.titulo = titulo.toUpperCase();
            this.descripcion = descripcion;
            this.precio =precio
            this.img = img;


        }
   
   

    }


    let productos = [];

    productos.push(new Productos(1,"Indumentaria","Gorrita blanca", "Descripcion",155, "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"));

    productos.push(new Productos(2, "Indumentaria", "Gorrita roja", "Descripcion", 100, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

    productos.push(new Productos(3, "Indumentaria", "Gorrita verde", "Descripcion", 350, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

    productos.push(new Productos(4, "Indumentaria", "Gorrito negro", "Descripcion", 500, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

    productos.push(new Productos(5, "Indumentaria", "Gorrito", "Descripcion", 1299, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

    productos.push(new Productos(6, "Accesorios", "lente templado", "Descripcion", 15000, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"));

    productos.push(new Productos(7,"Accesorios", "lente", "Descripcion", 55, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"))

    productos.push(new Productos(8,"Accesorios", "lente para ver", "Descripcion", 35, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",33))

    console.log(productos);
    

    // Filtrar por numero de id ascendente
    productos.sort((a, b) => a.id - b.id);




    // Filtrar por categoria
    let Accesorios = productos.filter((producto) => producto.categoria == "Accesorios");
    let Indumentaria = productos.filter((producto) => producto.categoria == "Indumentaria");

    // Funcion para reenderizar productos
    function renderProductos(arrayProductos) {
        let productosHTML = '';

        for (const item of arrayProductos) {
                 
            productosHTML = productosHTML + `

                <li class="producto">
                    <img src=${item.img}>
                <div class="producto-texto">
                        <p class="producto-titulo">${item.titulo}</p>
                        <p>${item.id}</p>
                        <p class="producto-descripcion">${item.descripcion}</p>
                        <div class="compra-botones">
                            <button class="btn btn-comprar">Agregar al carrito</button>
                            <span>$${item.precio}</span>
                        </div>
                
                    </div>
                </li>

            `

            document.getElementById('productos').innerHTML = productosHTML;
        }

    }   
    // Reenderizar producto seleccionado

        // Por default puse que se ejecute con todos los productos para que no se vea vacio
        renderProductos(productos)
  
        const filtroTodos = document.getElementById('todos');
        filtroTodos.addEventListener('click', function () {
            renderProductos(productos);
        });
        const filtroAccesorios = document.getElementById('anteojos');
        filtroAccesorios.addEventListener('click', function(){
            renderProductos(Accesorios);
        });


        const filtroIndumentaria = document.getElementById('gorritos');
        filtroIndumentaria.addEventListener('click', function(){
            renderProductos(Indumentaria)
        });

    console.log(Accesorios);
    

    // Agregar al carrito

    let arrayCarrito = []

    const botonAgregar = document.querySelectorAll('.btn-comprar');
    const botonEliminar = document.querySelectorAll('.btn-eliminar');

             botonAgregar.forEach(el => {
                 el.addEventListener('click', function () {

                     arrayCarrito.push(el.parentNode.parentElement);
                     console.log(arrayCarrito);
                     console.log(el.parentNode.parentElement);
                     carrito.innerHTML = arrayCarrito.length;



                     renderCarrito(arrayCarrito)
                 });

             });



             botonEliminar.forEach(el => {
                 el.addEventListener('click', function () {

                     arrayCarrito.pop(el.parentNode.parentElement);
                     console.log(arrayCarrito);
                     console.log(el.parentNode.parentElement);

                     carrito.innerHTML = arrayCarrito.length;



                     renderCarrito(arrayCarrito)
                 });

             });


    function renderCarrito(arrayCarrito) {
        let carritoHTML = '';

        for (const item of arrayCarrito) {

             carritoHTML = carritoHTML + `

                <li class="producto">
                     <img src=${item.img}>
                <div class="producto-texto">
                        <p class="producto-titulo">${item.titulo}</p>
                        <p>${item.id}</p>
                        <p class="producto-descripcion">${item.descripcion}</p>
                        <div class="compra-botones">
                            <button class="btn btn-eliminar">Eliminar</button>
                            <span>$${item.precio}</span>
                        </div>
                
                    </div>
                </li>

            `

            document.getElementById('sidebarcarrito').innerHTML = carritoHTML;
        }

    }


    


});