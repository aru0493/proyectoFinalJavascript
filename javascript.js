
  document.addEventListener("DOMContentLoaded", function() {
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

    function validarEmail(email) {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return regex.test(email);
    }
});