function redirigir() {
            const rol = document.getElementById('rol').value;

            if (rol === "administrador") {
                window.location.href = "../Principal/Administrador/Administrador.html";  // Página del administrador
            } else if (rol === "artesano") {
                window.location.href = "../Principal/Artesano/Artesano.html";  // Página del artesano
            } else {
                alert("Por favor seleccione un rol antes de continuar.");
            }
        }