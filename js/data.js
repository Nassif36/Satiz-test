let productos = [];
class Productos {
    constructor() {
        this.id = producto.id;
        this.categoria = producto.categoria;
        this.titulo = producto.titulo.toUpperCase();
        this.descripcion = producto.descripcion;
        this.precio = producto.precio;
        this.img = producto.img;


    }

}

// Funcion para reenderizar productos
function renderProductos(array) {
    let productosHTML = '';

    for (const producto of array) {

        productosHTML = productosHTML + `

                <li class="producto">
                    <img src=${producto.img}>
                <div class="producto-texto">
                        <p class="producto-titulo">${producto.titulo}</p>
                        <p>${producto.id}</p>
                        <p class="producto-descripcion">${producto.descripcion}</p>
                        <div class="compra-botones">
                            <button class="btn btn-comprar" data-id="${producto.id}">Agregar al carrito</button>
                            <span>$${producto.precio}</span>
                        </div>
                
                    </div>
                </li>

            `

        document.getElementById('productos').innerHTML = productosHTML;
    }

}

function objetoArray(array) {
    for (producto of array) {
        productos.push(new Productos(producto.id, producto.categoria, producto.titulo, producto.descripcion, producto.precio))

    }
}


window.addEventListener('DOMContentLoaded', () => {

    // Consumir el json

    fetch('./productos.json')
        .then((resp) => resp.json())
        .then((data) => {
            let productosJSON = [...data];
            objetoArray(productosJSON);
            console.log(productos);
            renderProductos(productos);
            filtros();
            operacionesProductos();
            return productos
        })
    console.log(productos);



    // Filtrar por numero de id ascendente
    function filtros() {
        productos.sort((a, b) => a.id - b.id);

        // Filtrar por categoria
        let accesorios = productos.filter((producto) => producto.categoria == "Accesorios");
        let indumentaria = productos.filter((producto) => producto.categoria == "Indumentaria");


        const filtroTodos = document.getElementById('todos');
        filtroTodos.addEventListener('click', function () {
            renderProductos(productos);
        });
        const filtroAccesorios = document.getElementById('anteojos');
        filtroAccesorios.addEventListener('click', function () {
            renderProductos(accesorios);
        });


        const filtroIndumentaria = document.getElementById('gorritos');
        filtroIndumentaria.addEventListener('click', function () {
            renderProductos(indumentaria)
        });
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

    function operacionesProductos() {
        // Agregar al carrito
        function agregarProducto(e) {

            const found = productos.find(producto => producto.id == e.target.dataset.id);
            arrayCarrito.push(found);

            Toastify({
                text: "Agregaste " + ' ' + found.titulo,
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

        const botonAgregar = document.querySelectorAll('.btn-comprar');
        const botonEliminar = document.getElementById('eliminar-todo');

        botonEliminar.onclick = limpiarStorage;

        botonAgregar.forEach(el => {
            console.log(el);
            el.addEventListener('click', function (e) {
                e.preventDefault()
                agregarProducto(e);


            });
        });

        function limpiarStorage() {
            localStorage.clear();
            window.location.reload()
            renderCarrito(arrayCarrito);
        }




        const guardarLocal = (clave, valor) => {
            localStorage.setItem(clave, valor);

        }

        carrito.innerHTML = 0;
        let arrayCarrito = JSON.parse(localStorage.getItem('productos')) || [];
        let itemSumado = JSON.parse(localStorage.getItem('sumado')) || [];
        document.getElementById('total').innerHTML = 'Total: $' + '' + itemSumado;
        carrito.innerHTML = arrayCarrito.length;
        renderCarrito(arrayCarrito);

    }
    



});