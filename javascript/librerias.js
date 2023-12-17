// Para el mensaje de bienvenida con Sweet Alert
document.addEventListener('DOMContentLoaded', function () {
    const mensaje = sessionStorage.getItem('mensaje');

    if (!mensaje) {
        const nombreGuardado = localStorage.getItem('userName');
        if (nombreGuardado) {
            Swal.fire({
                title: `Que bueno volver a verte, ${nombreGuardado}`,
                text: `Espero que estes listo para cazar monstruos`,
                icon: 'success'
            });
            sessionStorage.setItem('mensaje', 'true');
        } else {
            Swal.fire({
                title: 'Bienvenido',
                text: 'Aca vas a poder ver informacion sobre varios monstruos .Decime tu nombre para registrarte en el gremio de cazadores',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                preConfirm: (nombre) => {
                    if (!nombre) {
                        Swal.showValidationMessage('Como te voy a registrar sin un nombre.');
                    } else {
                        localStorage.setItem('userName', nombre);
                        Swal.fire({
                            title: `¡Bienvenido a bordo, cazador ${nombre}!`,
                            icon: 'success'
                        });
                        sessionStorage.setItem('mensaje', 'true');
                    }
                }
            });
        }
    }
});



// Para el carrusel con Swiper
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