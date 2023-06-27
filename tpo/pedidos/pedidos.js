

$(document).ready(function() {
    const form = $('form')[0];
    const email = $('#Email');
    const emailError = $('#Email + span.error');
  
    email.on('input', function(event) {
      if (email[0].validity.valid) {
        emailError.html(''); // Restablece el contenido del mensaje
        emailError.removeClass('error'); // Restablece el estado visual del mensaje
      } else {
        showError();
      }
    });
  
    form.on('#Click', function(event) {
      if (!email[0].validity.valid) {
        showError();
        event.preventDefault();
      } else {
        alert("Tu pedido ha sido realizado correctamente.");
      }
    });
  
    function showError() {
      if (email[0].validity.valueMissing) {
        emailError.text('Debe introducir una dirección de correo electrónico.');
      } else if (email[0].validity.typeMismatch) {
        emailError.text('El valor introducido debe ser una dirección de correo electrónico.');
      } else if (email[0].validity.tooShort) {
        emailError.text('El correo electrónico debe tener al menos ' + email[0].minLength + ' caracteres; has introducido ' + email[0].value.length + '.');
      }
  
      emailError.addClass('error activo');
    }
  });