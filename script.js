alert ("¡Bienvenido a Comé Tranquilo! Estamos acá para ayudarte.");

let userMail = prompt ("Comparinos tu mail y conseguí un 10% de descuento para tu próximo evento.")

if (isValidEmail(userMail)) {
    alert("¡Gracias! Te vamos a enviar a tu mail el 10% de descuento para tu próximo evento.");
} else {
    alert("El correo electrónico ingresado no es válido. Por favor, intentá nuevamente.");
}
