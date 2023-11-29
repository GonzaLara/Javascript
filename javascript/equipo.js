function almacenarLocalStorage() {
    localStorage.setItem('inventario', JSON.stringify(objetosInventario));
}

function mostrarInventario() {
    inventario.innerHTML = '';

    for (const objeto in objetosInventario) {
        if (objetosInventario[objeto] > 0) {
            const nuevoElemento = document.createElement('div');
            nuevoElemento.innerHTML = `<span class="letras"> <strong>${objeto}</strong>: <span>${objetosInventario[objeto]}`;
            inventario.appendChild(nuevoElemento);
        }
    }
}

function agregarObjeto(event) {
    event.preventDefault();
    const elemento = event.target.parentNode;
    const nombreObjeto = elemento.querySelector('h2').textContent;

    if (objetosInventario[nombreObjeto] && objetosInventario[nombreObjeto] >= limiteObjetos[nombreObjeto]) {
        alert(`No se puede llevar mas ${nombreObjeto}`);
        return;
    }

    if (objetosInventario[nombreObjeto]) {
        objetosInventario[nombreObjeto]++;
    } else {
        objetosInventario[nombreObjeto] = 1;
    }

    mostrarInventario();
    almacenarLocalStorage();
}

function quitarObjeto(event) {
    event.preventDefault();
    const elemento = event.target.parentNode;
    const nombreObjeto = elemento.querySelector('h2').textContent;

    if (objetosInventario[nombreObjeto] && objetosInventario[nombreObjeto] > 0) {
        objetosInventario[nombreObjeto]--;
    }

    mostrarInventario();
    almacenarLocalStorage();
}


const items = document.querySelectorAll('.cont');
const inventario = document.getElementById('inventario-items');

const guardarInventario = localStorage.getItem('inventario');
const objetosInventario = guardarInventario ? JSON.parse(guardarInventario) : {};

const limiteObjetos = {
    'Pocion': 10,
    'Pocion Maxima': 3,
    'Piedra de Afilar': 20,
    'Bolas de Pintura': 99,
    'Trampa Electrica': 1,
    'Trampa Enredaderas': 1,
    'Bomba Tranquil.': 8,
    'Bomba Flash': 5,
    'Bomba Sonica': 5,
    'Bebida Caliente': 5,
    'Bebida Fria': 5,
    'Antidoto': 10,
    'Bebida Energetica': 10,
    'Bomba de Humo': 4,
    'Megabomba de Barril': 2,
    'Prismaticos': 1,
};

items.forEach((item) => {
    const botonAgregar = item.querySelector('.agregar');
    const botonQuitar = item.querySelector('.quitar');

    botonAgregar.addEventListener('click', agregarObjeto);
    botonQuitar.addEventListener('click', quitarObjeto);
});

mostrarInventario();