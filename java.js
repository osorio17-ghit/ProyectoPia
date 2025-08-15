document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");
    const sidebar = document.querySelector(".sidebar");

    // Abrir/cerrar menú con el botón
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // evita que el clic se propague y lo cierre al instante
        sidebar.classList.toggle("active");
    });

    // Cerrar si se hace clic fuera del menú
    document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });
});

