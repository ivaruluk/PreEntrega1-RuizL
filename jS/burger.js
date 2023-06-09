  // Variables
  let precioHamburguesa = 2500; // Precio de cada hamburguesa
  let cantidadHamburguesas = 2; // Cantidad de hamburguesas seleccionadas por el usuario

// Función para calcular el precio total del carrito de hamburguesas
function calcularPrecioTotal(cantidadHamburguesas, precioUnitario) {
    let precioTotal = cantidadHamburguesas * precioUnitario;
    return precioTotal;
  }
  
  // Cálculo del precio total
  let precioTotal = calcularPrecioTotal(cantidadHamburguesas, precioHamburguesa);
  
  // Mostrar el resultado
  console.log("El precio total del carrito es: $" + precioTotal);
  