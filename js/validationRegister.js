function validarFormulario() {
  var nombre = document.getElementById("firstname").value;
  var apellido = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var consulta = document.getElementById("consulta").value;

  if (nombre === "" || apellido === "" || email === "" || consulta === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false; // Esto evita que el formulario se envíe si hay campos vacíos.
  }
  else
    alert("Muchas gracias por tu consulta")

  return true; // Envía el formulario si todo está validado correctamente.
}
  