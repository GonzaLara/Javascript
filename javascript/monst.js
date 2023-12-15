class Monstruo {
    constructor(nombre, habitat) {
        this.nombre = nombre;
        this.habitat = habitat;
    }
}

const monstruos = [
    new Monstruo("Velocidrome", "Bosques y Colinas/Jungla/Vergel Eterno"),
    new Monstruo("Daimyio Hermitaur", "Desierto/Jungla/Bosque Inundado"),
    new Monstruo("Shogun Ceanataur", "Volcan, Pantano, Bosque Inundado"),
    new Monstruo("Lagiacrus", "Bosque Inundado/Picos/Jungla"),
];
class Contrato {
    constructor(objetivo, recompensa) {
        this.objetivo = objetivo;
        this.recompensa = recompensa;
    }
}

const contratos = [
    new Contrato("Caza 1 Velocidrome", "1000p"),
    new Contrato("Caza 1 Daimyio Hermitaur", "2500p"),
    new Contrato("Caza 1 Shogun Ceanataur", "3000p"),
    new Contrato("Caza 1 Lagiacrus", "3500p"),
];

let overlayAbierto = false;

function Overlay(monstruo) {
    const overlay = document.getElementById('overlay');

    if (overlayAbierto) {
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
        overlayAbierto = false;
    } else {
        overlayAbierto = true;

        const nombreElemento = document.getElementById('nombreMonstruo');
        const habitatElemento = document.getElementById('habitatMonstruo');

        if (monstruo >= 1 && monstruo <= monstruos.length) {
            nombreElemento.textContent = monstruos[monstruo - 1].nombre;
            habitatElemento.textContent = "Habitat: " + monstruos[monstruo - 1].habitat;

            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.style.opacity = 1;
            }, 0);
        }
    }
}

function Overlay2(contrato) {
    const overlay2 = document.getElementById('overlay2');

    if (overlayAbierto) {
        overlay2.style.opacity = 0;
        setTimeout(() => {
            overlay2.style.display = "none";
        }, 500);
        overlayAbierto = false;
    } else {
        overlayAbierto = true;

        const objetivoElemento = document.getElementById('objetivoMision');
        const recompensaElemento = document.getElementById('recompensaMision');

        if (contrato >= 1 && contrato <= contratos.length) {
            objetivoElemento.textContent = "Objetivo: " + contratos[contrato - 1].objetivo;
            recompensaElemento.textContent = "Recompensa: " + contratos[contrato - 1].recompensa;

            overlay2.style.display = "flex";
            setTimeout(() => {
                overlay2.style.opacity = 1;
            }, 0);
        }
    }
}