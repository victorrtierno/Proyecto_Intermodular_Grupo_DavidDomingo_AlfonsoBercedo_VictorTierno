document.addEventListener("DOMContentLoaded", () => {
    
    // NAVEGACIÓN EN INDEX.HTML
    const menuSeleccion = document.getElementById("menu-seleccion");
    const formLoginCliente = document.getElementById("formulario-login-cliente");
    const formRegistro = document.getElementById("formulario-registro");
    const formLoginEmpleado = document.getElementById("formulario-login-empleado");

    const configurarBoton = (id, form) => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener("click", () => {
            menuSeleccion.classList.add("seccion-oculta");
            form.classList.remove("seccion-oculta");
        });
    };

    configurarBoton("btn-mostrar-login-cliente", formLoginCliente);
    configurarBoton("btn-mostrar-registro", formRegistro);
    configurarBoton("btn-mostrar-login-empleado", formLoginEmpleado);

    document.querySelectorAll(".btn-volver-inicio").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".caja-formulario, #menu-seleccion").forEach(el => el.classList.add("seccion-oculta"));
            menuSeleccion.classList.remove("seccion-oculta");
            menuSeleccion.classList.add("seccion-activa");
        });
    });

    // ==========================================
    // SIMULACIÓN DE ENVÍO DE FORMULARIOS
    // ==========================================
    const formularios = [formLoginCliente, formRegistro, formLoginEmpleado];
    
    formularios.forEach(form => {
        if (form) {
            form.addEventListener("submit", (evento) => {
                // 1. Evitamos que la página se recargue al darle al botón
                evento.preventDefault(); 
                
                // 2. Simulamos un pequeño mensaje de éxito
                if (form.id === "formulario-registro") {
                    alert("¡Registro completado con éxito! Iniciando sesión...");
                }
                
                // 3. Redirigimos al usuario al panel principal
                window.location.href = "main.html"; 
            });
        }
    });

    // SIMULACIÓN DE COMPRA Y CARGA (Para conectar con EventoDao y CantanteDao)
    const cargarEventos = () => {
        const eventos = [
            { id: 1, nombre: "Gran Concierto Pop", fecha: "2026-05-20", lugar: "Auditorio Nacional" },
            { id: 2, nombre: "Festival Rock", fecha: "2026-06-15", lugar: "Estadio Olímpico" }
        ];
        const cont = document.getElementById("contenedor-eventos");
        if (!cont) return;
        let html = `<table class="tabla-eventos">
                    <tr><th>Evento</th><th>Fecha</th><th>Lugar</th><th>Acción</th></tr>`;
        eventos.forEach(ev => {
            html += `<tr><td>${ev.nombre}</td><td>${ev.fecha}</td><td>${ev.lugar}</td>
                     <td><button class="btn-comprar" onclick="realizarCompra(${ev.id}, '${ev.nombre}')">Comprar</button></td></tr>`;
        });
        cont.innerHTML = html + "</table>";
    };

    window.realizarCompra = (id, nombre) => {
        alert("Procesando transacción para: " + nombre);
        // Aquí se llamaría a la lógica de VentaDao y EntradaDao
    };

    // PESTAÑAS DEL DASHBOARD
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("activo"));
            document.querySelectorAll(".panel-contenido").forEach(p => p.classList.remove("activo"));
            e.target.classList.add("activo");
            document.getElementById(e.target.dataset.target).classList.add("activo");
        });
    });

    if (document.getElementById("contenedor-eventos")) cargarEventos();
});