document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnSaludo");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    mensaje.textContent = "Bienvenidos";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnTema = document.getElementById("btnTema");

  btnTema.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});