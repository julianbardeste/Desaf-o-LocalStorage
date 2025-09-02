// js/index.js

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const button = document.getElementById("buttonText");

  button.addEventListener("click", () => {
    const valor = input.value.trim();

    if (valor) {
      // Guardamos el dato en localStorage bajo la clave "dato"
      localStorage.setItem("dato", valor);
      input.value = ""; // limpia el input
    } else {
      alert("❌ Debes escribir algo antes de guardar.");
    }
  });
});
