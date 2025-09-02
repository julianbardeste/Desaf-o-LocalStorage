# Muestra en el otro HTML!

Escribe el código necesario en _js/index.js_ y en _js/data.js_ para que en _index.html_ se pueda ingresar un dato al localStorage y el mismo se pueda visualizar al abrir _data.html_ (el mismo debe verse en la página, sin usar alerts).

---------------------------------------------------------

Situación inicial:{

    index.html:
    Tenía un campo de texto (<input id="inputText" />) y un botón.
    Estaba vinculado a js/index.js (vacío).

    data.html:
    Mostraba un <span id="data"></span> donde debía aparecer la información.
    Estaba vinculado a js/data.js (vacío).

    index.js y data.js:
    Ambos archivos estaban vacíos y había que implementar la lógica.
}

Solución:{

    1. Mejorar el formulario en index.html{

        Se agregó un placeholder para guiar al usuario:

        <input type="text" id="inputText" placeholder="Escribe algo...">
        <button id="buttonText">Guardar!</button>
    }

    2. Guardar datos en localStorage (index.js){

        Se programó la lógica para ejecutar los siguientes pasos al hacer clic:

        Capturar el valor del input.
        Si no está vacío, guardar este valor en localStorage con la clave "dato".
        Luego se limpie el campo de texto.

        document.addEventListener("DOMContentLoaded", () => {
            const input = document.getElementById("inputText");
            const button = document.getElementById("buttonText");

            button.addEventListener("click", () => {
                const valor = input.value.trim();
                if (valor) {
                    localStorage.setItem("dato", valor);
                    input.value = ""; 
                } 
            });
        });
    }

    3. Recuperar y mostrar el dato en data.html (data.js) {

        Se implementó el script para leer el valor guardado en localStorage y mostrarlo dentro del <span id="data">.
        Si no hay datos, se muestra un mensaje alternativo.

        document.addEventListener("DOMContentLoaded", () => {
            const dataSpan = document.getElementById("data");
            const valor = localStorage.getItem("dato");

            if (valor) {
                dataSpan.textContent = valor;
            } else {
                dataSpan.textContent = "No hay datos guardados.";
            }
        });
    }
}

    