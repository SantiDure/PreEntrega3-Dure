class Producto {
  //Atributos
  id;
  nombre;
  foto;
  precio;
  cantidad;
  marca;

  //Constructor
  constructor(id, nombre, foto, precio, cantidad, marca) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.precio = precio;
    this.cantidad = cantidad;
    this.marca = marca;
  }

  //Metodos
  subTotal = () => {
    return this.precio * this.cantidad;
  };
}

//Productos
const Listaproductos = [
  new Producto(1, "Ryzen 3", "../assets/ryzen3.webp", 70000, 1, "AMD"),
  new Producto(2, "Ryzen 5", "../assets/ryzen5.webp", 150000, 1, "AMD"),
  new Producto(3, "Ryzen 7", "../assets/ryzen7.webp", 200000, 1, "AMD"),
];
