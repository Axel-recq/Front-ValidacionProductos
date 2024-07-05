$(document).ready(function() {
  $('#agregar').click(function() {
    var nombre = $('#nombre').val();
    var cantidad = parseFloat($('#cantidad').val());
    var precio = parseFloat($('#precio').val());
    
    // Expresión regular para validar que el nombre contiene solo letras y espacios
    var regexNombre = /^[A-Za-z\s]+$/;
    
    // Validar que se haya ingresado un nombre válido y que cantidad y precio sean números y positivos
    if(nombre.match(regexNombre) && !isNaN(cantidad) && !isNaN(precio) && cantidad > 0 && precio > 0) {
      var subtotal = cantidad * precio;
      var igv = subtotal * 0.18;
      var total = subtotal + igv;
      
      // Redondear los valores del subtotal, total e IGV a dos decimales
      subtotal = subtotal.toFixed(2);
      igv = igv.toFixed(2);
      total = total.toFixed(2);
      
      // Agregar una nueva fila a la tabla con los datos del producto y el cálculo del total y el IGV
      $('#productos tbody').append('<tr><td>' + nombre + '</td><td>' + cantidad + '</td><td>' + precio + '</td><td>' + subtotal + '</td><td>' + igv + '</td><td>' + total + '</td></tr>');
      
      // Limpiar los campos del formulario después de agregar el producto
      $('#nombre').val('');
      $('#cantidad').val('');
      $('#precio').val('');
    } else {
      alert('Por favor, ingrese un nombre válido y asegúrese de que la cantidad y el precio sean números positivos.');
    }
  });
});
