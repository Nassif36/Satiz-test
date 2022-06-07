class Productos {
    constructor(id, categoria, titulo, descripcion, precio, img, cantidad) {
        this.id = parseInt(id);
        this.categoria = categoria;
        this.titulo = titulo.toUpperCase();
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
        this.cantidad = parseInt(cantidad);


    }
}
let productos = [];

productos.push(new Productos(1, "Indumentaria", "Gorrita blanca", "Descripcion", 155, "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"));

productos.push(new Productos(2, "Indumentaria", "Gorrita roja", "Descripcion", 100, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

productos.push(new Productos(3, "Indumentaria", "Gorrita verde", "Descripcion", 350, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

productos.push(new Productos(4, "Indumentaria", "Gorrito negro", "Descripcion", 500, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

productos.push(new Productos(5, "Indumentaria", "Gorrito", "Descripcion", 1299, "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"));

productos.push(new Productos(6, "Accesorios", "lente templado", "Descripcion", 15000, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"));

productos.push(new Productos(7, "Accesorios", "lente", "Descripcion", 55, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"))

productos.push(new Productos(8, "Accesorios", "lente para ver", "Descripcion", 35, "https://images.unsplash.com/photo-1501619838605-f3e4c602db04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 33))

console.log(productos);

window.addEventListener('DOMContentLoaded', () => {

   


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
                            <button class="btn btn-comprar" data-id="${item.id}">Agregar al carrito</button>
                            <span>$${item.precio}</span>
                        </div>
                
                    </div>
                </li>

            `

            document.getElementById('productos').innerHTML = productosHTML;
        }

    }

    function renderCarrito(arrayCarrito) {
        let carritoHTML = '';
        for (const producto of arrayCarrito) {
            carritoHTML = carritoHTML + `
                    <li class="producto">
                        <img src=${producto.img}>
                    <div class="producto-texto">
                            <p class="producto-titulo">${producto.titulo}</p>
                
                            <div class="compra-botones">
                                <button class="btn btn-eliminar">Eliminar</button>
                                <span>$${producto.precio}</span>
                            </div>
                
                        </div>
                    </li>

                `
            document.getElementById('listaproductos').innerHTML = carritoHTML;
        }

    }

     // Filtrar por numero de id ascendente
     productos.sort((a, b) => a.id - b.id);

     // Por default puse que se ejecute con todos los productos para que no se vea vacio
     renderProductos(productos)


     const filtroTodos = document.getElementById('todos');
     filtroTodos.addEventListener('click', function () {
         renderProductos(productos);
     });
     const filtroAccesorios = document.getElementById('anteojos');
     filtroAccesorios.addEventListener('click', function () {
         renderProductos(Accesorios);
     });


     const filtroIndumentaria = document.getElementById('gorritos');
     filtroIndumentaria.addEventListener('click', function () {
         renderProductos(Indumentaria)
     });

    // Filtrar por categoria
    let Accesorios = productos.filter((producto) => producto.categoria == "Accesorios");
    let Indumentaria = productos.filter((producto) => producto.categoria == "Indumentaria");

    

     function agregarProducto(e) {
         const found = productos.find(producto => producto.id == e.target.dataset.id);
         arrayCarrito.push(found);

        Toastify({
            text: "Agregaste "+' '+found.titulo,
            className: "info",
            style: {
                background: "linear-gradient(to right, #2063aa, #20aa67)",
            }
        }).showToast();

         // if(arrayCarrito.length >= 3) {
         //      const carritoEliminar = arrayCarrito.find(producto => producto.id == e.target.dataset.id);
         //      arrayCarrito.forEach(carritoEliminar => {
         //         arrayCarrito.pop(carritoEliminar)
         //      })
         // }

         console.log(arrayCarrito);
         carrito.innerHTML = arrayCarrito.length;
         let total = [];

         arrayCarrito.forEach(found => {
             total.push(found.precio);
             guardarLocal('productos', JSON.stringify(arrayCarrito));
             guardarLocal('total', JSON.stringify(total));

         });

         let sum = 0;
         let arrayTotal = JSON.parse(localStorage.getItem('total')) || [];

         for (let i = 0; i < arrayTotal.length; i++) {
             sum += arrayTotal[i];
             document.getElementById('total').innerHTML = 'Total: $' + '' + sum;
             guardarLocal('sumado', JSON.stringify(sum));

         }

         renderCarrito(arrayCarrito);
     }
    


    



    // Agregar al carrito


    const botonAgregar = document.querySelectorAll('.btn-comprar');
    const botonEliminar = document.getElementById('eliminar-todo');
    botonEliminar.onclick = limpiarStorage;
        
   
     function limpiarStorage() {
         localStorage.clear();
         renderCarrito(arrayCarrito);
     }


    botonAgregar.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault()
            agregarProducto(e);
        });
    });

    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor);
       
    }

    carrito.innerHTML = 0;
    let arrayCarrito = JSON.parse(localStorage.getItem('productos')) || [];
    let itemSumado = JSON.parse(localStorage.getItem('sumado')) || [];
    document.getElementById('total').innerHTML = 'Total: $' + '' + itemSumado;
    carrito.innerHTML = arrayCarrito.length;
    renderCarrito(arrayCarrito);





});