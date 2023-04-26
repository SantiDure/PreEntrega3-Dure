//Array donde se almacenaran los productos
let carrito = [];

//Boton de Mostrar Carrito
let btnMostrar = document.getElementById("mostrar-btn");
let btnBorrar = document.getElementById("borrar-btn");
let btnAgregar = document.getElementById("agregar-btn");

//Toma un boton y comprueba si hay productos y oculta o muestra el boton
function hayProductos() {
  switch (carrito.length) {
    case 0:
      btnMostrar.style.display = "none";
      btnBorrar.style.display = "none";
      break;
    default:
      btnMostrar.style.display = "block";
      btnBorrar.style.display = "block";
  }
}

//Instancia un Producto y le asigna sus atributos
function cargarUnProducto() {
  const nuevoProducto = new Producto();
  try {
    nuevoProducto.nombre = prompt("Escribe el nombre de tu producto: ")
      .trimStart()
      .toLocaleLowerCase();
    nuevoProducto.cantidad = Number(prompt("Cuantos deseas? "));
    nuevoProducto.marca = prompt("De que marca? ")
      .trimStart()
      .toLocaleLowerCase();
    nuevoProducto.precio = Number(prompt("Que precio tiene? "));

    if (
      nuevoProducto.nombre.length > 0 &&
      nuevoProducto.nombre != undefined &&
      nuevoProducto.cantidad > 0 &&
      nuevoProducto.marca != undefined &&
      nuevoProducto.precio > 0
    ) {
      carrito.push(nuevoProducto);
      console.log("Producto agregado al carrito!");
    } else {
      alert("Datos invalidos");
      return;
    }
  } catch {
    if (TypeError) {
      alert("ERROR: Campo vacío");
    }
  }
}

//Crea un Producto y luego pregunta si se desea crear otro al usuario
const cargarProductos = () => {
  let seguir;
  do {
    cargarUnProducto();
    hayProductos();
    seguir = prompt("Desea agregar otro producto? si/no");
  } while (seguir == "si");
};

//quita un producto del carrito
function borrarProducto(producto) {
  producto = prompt(
    "Escribe el nombre del producto que deseas quitar: "
  ).toLocaleLowerCase();
  let index;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === producto) {
      index = i;
      carrito.splice(index, 1);
      hayProductos();
      console.log("Producto eliminado");
    }
  }
}

//Muestra los productos añadidos con sus atributos formateados, ademas, un sub total del costo de los productos (productos)
function mostrarCarrito() {
  let ticket = "";
  let totalTicket = 0;
  carrito.forEach((producto) => {
    ticket = `${ticket} Nombre: ${producto.nombre} \n Precio: ${
      producto.precio
    } \n Cantidad: ${producto.cantidad} \n Marcar: ${
      producto.marca
    }\n Sub total: $${producto.subTotal()}\n \n`;
  });

  totalTicket = carrito.reduce((total, producto) => {
    return total + producto.subTotal();
  }, 0);
  alert(ticket + `Total: $${totalTicket}`);
  console.log(totalTicket);
}

hayProductos();

btnAgregar.addEventListener("click", cargarProductos);
btnMostrar.addEventListener("click", mostrarCarrito);
btnBorrar.addEventListener("click", borrarProducto);
