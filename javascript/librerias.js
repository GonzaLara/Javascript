// Para el mensaje de bienvenida con Sweet Alert
document.addEventListener('DOMContentLoaded', function () {
    const mensajeMostrado = sessionStorage.getItem('mensajeMostrado');

    if (!mensajeMostrado) {
        const storedName = localStorage.getItem('nombreUsuario');
        if (storedName) {
            Swal.fire({
                title: `Que bueno volver a verte, ${storedName}`,
                text: `Espero que estés listo para cazar monstruos`,
                icon: 'success'
            });
            sessionStorage.setItem('mensajeMostrado', 'true');
        } else {
            Swal.fire({
                title: 'Bienvenido:',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                preConfirm: (nombre) => {
                    if (!nombre) {
                        return Swal.showValidationMessage('Bienvenido Cazador, decime tu nombre para registrarte');
                    } else {
                        localStorage.setItem('nombreUsuario', nombre);
                        Swal.fire({
                            title: `¡Bienvenido, ${nombre}!`,
                            icon: 'success'
                        });
                        sessionStorage.setItem('mensajeMostrado', 'true');
                    }
                }
            });
        }
    }
});


// Para el carrusel con Swiper en el index
const swiper = new Swiper('.swiper', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    pagination: {
        el: '.swiper-pagination',
    },
});