 document.addEventListener("DOMContentLoaded", function() {
            // Mostrar el loader al cargar la página
            document.getElementById("loader").style.display = "block";

            // Simulando un retraso para mostrar el loader
            setTimeout(() => {
                // Ocultar el loader
                document.getElementById("loader").style.display = "none";
                // Mostrar el contenido
                document.getElementById("content").style.display = "block";
            }, 2000); // Cambia este valor para ajustar el tiempo de carga

            const button1 = document.getElementById("button1");
            const videos1 = document.getElementById("videos1");

            button1.addEventListener("click", function() {
                videos1.classList.toggle("hidden");
                button1.textContent = videos1.classList.contains("hidden") ? "Mostrar más videos" : "Ocultar videos";
            });
            const button2 = document.getElementById("button2");
            const videos2 = document.getElementById("videos2");

            button2.addEventListener("click", function() {
                videos2.classList.toggle("hidden");
                button2.textContent = videos2.classList.contains("hidden") ? "Mostrar más videos" : "Ocultar videos";
            });
             const button3 = document.getElementById("button3");
            const videos3 = document.getElementById("videos3");

            button3.addEventListener("click", function() {
                videos3.classList.toggle("hidden");
                button3.textContent = videos3.classList.contains("hidden") ? "Mostrar más videos" : "Ocultar videos";
            });
        });