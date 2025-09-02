// js/data.js

document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el <span id="data"> desde el HTML
  const dataSpan = document.getElementById("data");

  // Recuperamos el dato del localStorage
  const valor = localStorage.getItem("dato");

  // Si hay un valor, lo mostramos, si no, mostramos un mensaje alternativo
  if (valor) {
    dataSpan.textContent = valor;
  } else {
    dataSpan.textContent = "No hay datos guardados.";
  }
});
