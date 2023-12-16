const form = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

function sendEmail() {
    const cuerpoMensaje = `Nombre: ${nombre.value}<br>Apellido: ${apellido.value}<br>
    Telefono: ${telefono.value}<br>Email: ${email.value}<br>Mensaje: ${mensaje.value}`;

    Email.send({
        SecureToken: "7a4d22e8-d5be-4ecd-8931-ee053aaa3615",
        To: 'cuentadepruebajavas@gmail.com',
        From: "cuentadepruebajavas@gmail.com",
        Subject: "Formulario de Contacto",
        Body: cuerpoMensaje
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "¡Mensaje Enviado!",
                    imageUrl: "./imagenes/todoOK.png",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Mi imagen"
                });
            }
        }
    );
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nombre.classList.contains("error") && !apellido.classList.contains("error") && !telefono.classList.contains("error") &&
        validarEmail(email.value) && !mensaje.classList.contains("error")) {

        sendEmail();
        form.reset();
        return false;
    } else {
        if (!validarEmail(email.value)) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Parece que la direccion de email esta mal colocada",
            });
        }
    }
});