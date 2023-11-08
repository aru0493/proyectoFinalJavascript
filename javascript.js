
  document.addEventListener("DOMContentLoaded", function() {

   /* Validación formulario de adopción */

    const formulario = document.getElementById("formularioAdopcion");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validarFormulario()) {
            formulario.submit();
        }
    });

    function validarFormulario() {
        let esValido = true;
        const campos = [
            { campoId: "nombreAdopta", mensajeId: "nombreError" },
            { campoId: "apellidoAdopta", mensajeId: "apellidoError" },
            { campoId: "edadAdopta", mensajeId: "edadError" },
            {campoId: "localidadAdopta", mensajeId: "localidadError"},
            { campoId: "codigoPostalAdopta", mensajeId: "codigoPostalError" },
            { campoId: "direccionAdopta", mensajeId: "direccionError" },
            { campoId: "provinciaAdopta", mensajeId: "provinciaError" },
            { campoId: "telefonoAdopta", mensajeId: "telefonoError" },
            { campoId: "emailAdopta", mensajeId: "emailError" },
            
        ];

        campos.forEach(function(campo) {
            const input = document.getElementById(campo.campoId);
            const valor = input.value.trim();
            const mensaje = document.getElementById(campo.mensajeId);

            if (valor === "") {
                mensaje.textContent = "Dato ingresado no válido";
                esValido = false;
            } else {
                mensaje.textContent = "";
            }

            if (campo.campoId === "emailAdopta" && !validarEmail(valor)) {
                mensaje.textContent = "Correo electrónico no válido";
                esValido = false;
            }
        });

        return esValido;
    }

/* Validación formulario de contacto */

    const formularioC = document.getElementById("formularioContacto");
    formularioC.addEventListener("submit", function(eventC) {
        eventC.preventDefault();
        if (validarFormularioC()) {
            formularioC.submit();
        }
    });

    function validarFormularioC() {
        let esValido = true;
        const camposC = [
            { campoIdC: "areaTexto", mensajeIdC: "textoError" },
            { campoIdC: "emailContacto", mensajeIdC: "emailErrorC" },
            
        ];

        camposC.forEach(function(campoC) {
            const input = document.getElementById(campoC.campoIdC);
            const valor = input.value.trim();
            const mensaje = document.getElementById(campoC.mensajeIdC);

            if (valor === "") {
                mensaje.textContent = "Dato ingresado no válido";
                esValido = false;
            } else {
                mensaje.textContent = "";
            }

            if (campoC.campoIdC === "emailContacto" && !validarEmail(valor)) {
                mensaje.textContent = "Correo electrónico no válido";
                esValido = false;
            }
        });

        return esValido;
    }

    function validarEmail(email) {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return regex.test(email);
    }

});