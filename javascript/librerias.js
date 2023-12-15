// Para el mensaje de bienvenida con Sweet Alert
document.addEventListener('DOMContentLoaded', function () {
    const mensajeMostrado = sessionStorage.getItem('mensajeMostrado');

    if (mensajeMostrado === null) {
        const guardarNombre = localStorage.getItem('nombreUsuario');
        if (guardarNombre) {
            Swal.fire({
                title: `¡Que bueno volver a verte, ${guardarNombre}!`,
                text: 'Espero que estés listo para cazar monstruos.',
                icon: 'success'
            });
            sessionStorage.setItem('mensajeMostrado', 'true');
        } else {
            Swal.fire({
                title: 'Bienvenido Cazador',
                text: 'Decime tu nombre para registrarte.',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    const userName = resultado.value;
                    localStorage.setItem('nombreUsuario', userName);
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