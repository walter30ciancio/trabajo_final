// Validacion de usuario

let usuarioInput = document.getElementById("usuario")
let passwordInput = document.getElementById("password")
/*
if (usuarioInput.value == "" || passwordInput.value == "") {
    Swal.fire({
        title: "Ups!",
        text: "Por favor complete los campos vacios!",
        icon: "error"
      });
}
*/

// Validacion de un FORMULARIO

const form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {

 if (usuarioInput.value == "" || passwordInput.value == "") {
  Swal.fire({
    title: "Ups!",
    text: "Por favor complete los campos vacios!",
    icon: "error"
  });

     event.preventDefault();// Evita que el formulario se envie
 } else {
  Swal.fire({
    title: "Good!",
    text: "Bienvenido " + usuarioInput.value + "!",
    icon: "success"
  });
  //window.close();
 } 
});







