document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnSaludo");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    mensaje.textContent = "Bienvenidos";
  });
});