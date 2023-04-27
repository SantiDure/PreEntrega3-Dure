let productos = document.getElementById("productos");
carrito = [];

//Muestra los productos en DOM
Listaproductos.forEach((producto) => {
  productos.innerHTML += `
    <div class="card-${producto.id}" style="width: 18rem;">
          <img src="${producto.foto}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <p class="card-text">${producto.marca}</p>
            <button id="btn-agregar" type="button" class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>`;
});

let botonAgregar = document.getElementById("btn-agregar");
