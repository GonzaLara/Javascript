alert("Elegí tu tipo de Pokemon a generar");
alert("1.Agua\n\n2.Fuego\n\n3.Planta");

let opcion = prompt("Elegir").toLowerCase();
let continuar = true;

function pokeAgua() {
    var aleatorio = Math.floor(Math.random() * 5);

    let agua1 = "Blastoise";
    let agua2 = "Vaporeon";
    let agua3 = "Gyarados";
    let agua4 = "Wailord";
    let agua5 = "Staryu";

    let nombre;

    if (aleatorio === 0) {
        nombre = agua1;
    } else if (aleatorio === 1) {
        nombre = agua2;
    } else if (aleatorio == 2){
        nombre = agua3;
    } else if (aleatorio == 3) {
        nombre = agua4;
    } else {
        nombre = agua5
    }

    alert("Te tocó el pokemon de agua: " + nombre);
}

function pokeFuego() {
    var aleatorio = Math.floor(Math.random() * 5);

    let fuego1 = "Arcanine";
    let fuego2 = "Rapidash";
    let fuego3 = "Quilava";
    let fuego4 = "Cinderace";
    let fuego5 = "Flareon";

    let nombre;

    if (aleatorio === 0) {
        nombre = fuego1;
    } else if (aleatorio === 1) {
        nombre = fuego2;
    } else if (aleatorio == 2){
        nombre = fuego3;
    } else if (aleatorio == 3) {
        nombre = fuego4;
    } else {
        nombre = fuego5
    }

    alert("Te tocó el pokemon de fuego: " + nombre);
}

function pokePlanta() {
    var aleatorio = Math.floor(Math.random() * 5);

    let planta1 = "Serperior";
    let planta2 = "Cacnea";
    let planta3 = "Chikorita";
    let planta4 = "Gogoat";
    let planta5 = "Carnivine";

    let nombre;

    if (aleatorio === 0) {
        nombre = planta1;
    } else if (aleatorio === 1) {
        nombre = planta2;
    } else if (aleatorio == 2){
        nombre = planta3;
    } else if (aleatorio == 3) {
        nombre = planta4;
    } else {
        nombre = planta5
    }

    alert("Te tocó el pokemon de planta: " + nombre);
}

switch (opcion) {
    case 'agua':
        pokeAgua();
        do {
            let pregunta = prompt("¿generar otro?\ny(si) / n(no)").toLowerCase();
            if (pregunta == 'y' || pregunta == 's') {
                pokeAgua();
            } else {
                alert("chauuuuu");
                continuar = false;
            }
        } while (continuar == true);
        break;

    case 'fuego':
        pokeFuego();
        do {
            let pregunta = prompt("¿generar otro?\ny(si) / n(no)").toLowerCase();
            if (pregunta == 'y' || pregunta == 's') {
                pokeFuego();
            } else {
                alert("chauuuuu");
                continuar = false;
            }
        } while (continuar == true);
        break;

    case 'planta':
        pokePlanta();
        do {
            let pregunta = prompt("¿generar otro?\ny(si) / n(no)").toLowerCase();
            if (pregunta == 'y' || pregunta == 's') {
                pokePlanta();
            } else {
                alert("chauuuuu");
                continuar = false;
            }
        } while (continuar == true);
        break;

    default: alert("mmm eso no es un tipo de pokemon")
        break;
}