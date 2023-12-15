// Para el mensaje de bienvenida con Sweet Alert
document.addEventListener('DOMContentLoaded', function () {
    const hasShownMessage = sessionStorage.getItem('hasShownMessage');

    if (!hasShownMessage) {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            Swal.fire({
                title: `Que bueno volver a verte, ${storedName}`,
                text: `Espero que estes listo para cazar monstruos`,
                icon: 'success'
            });
            sessionStorage.setItem('hasShownMessage', 'true');
        } else {
            Swal.fire({
                title: 'Bienvenido cazador',
                text: 'Decime tu nombre para registrarte en el gremio',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                preConfirm: (name) => {
                    if (!name) {
                        Swal.showValidationMessage('Como te voy a registrar sin un nombre.');
                    } else {
                        localStorage.setItem('userName', name);
                        Swal.fire({
                            title: `¡Bienvenido a bordo, ${name}!`,
                            icon: 'success'
                        });
                        sessionStorage.setItem('hasShownMessage', 'true');
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