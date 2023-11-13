/* Pograma que permite capturar hasta 4 pokemones de una lista para armar un equipo. Se puede liberarlos y buscar nuevos mediante un menu. */


/* Arrays y Clases */
class Poke {
    constructor(nombre, poder, tipo, debilidad) {
        this.nombre = nombre;
        this.poder = poder;
        this.tipo = tipo;
        this.debilidad = debilidad;
    }
}

let lista = [];

const listaPokemon = [
    new Poke("Venusaur", "40/100", "Planta/Veneno", "Fuego/Psiquico/Volador/Hielo"),
    new Poke("Blastoise", "40/100", "Agua", "Planta/Electrico"),
    new Poke("Charizard", "40/100", "Fuego/Volador", "Agua/Electrico/Roca(*4)"),
    new Poke("Pidgeot", "33/100", "Normal/Volador", "Electrico/Hielo/Roca"),
    new Poke("Arbok", "42/100", "Veneno", "Psiquico/Tierra"),
    new Poke("Rhyperior", "70/100", "Tierra / Roca", "Acero/Hielo/Agua(*4)/Lucha/Planta(*4)/Tierra"),
    new Poke("Tyranitar", "60/100", "Roca/Siniestro", "Acero/Lucha(*4)/Agua/Hada/Planta/Bicho/Tierra"),
    new Poke("Zygarde", "48/100", "Dragon/Tierra", "Hada/Hielo(*4)/Dragon"),
    new Poke("Kyogre", "45/100", "Agua", "Planta/Electrico"),
    new Poke("Lunala", "57/100", "Psiquico/Fantasma", "Fantasma(*4)/Siniestro(*4)"),
    new Poke("Giratina", "50/100", "Fantasma/Dragon", "Fantasma/Siniestro/Hada/Hielo/Dragon"),
    new Poke("Raichu", "39/100", "Electrico", "Tierra"),
    new Poke("Ferropalmas", "71/100", "Lucha/Electrico", "Psiquico/Hada/Tierra"),
    new Poke("Genesect", "64/100", "Bicho/Acero", "Fuego(*4)"),
    new Poke("Articuno", "45/100", "Hielo/Volador", "Acero/Fuego/Electrico/Roca(*4)"),
];
/* */


/* Funciones */
function agregarPokemon() {
    const aleatorio = Math.floor(Math.random() * listaPokemon.length);
    const pokemonElegido = listaPokemon[aleatorio];

    if (lista.length < 4) {
        lista.push(pokemonElegido);
        alert("Encontraste a " + pokemonElegido.nombre + " para tu equipo.");
        mostrarMenu();
    } else {
        alert("Solo podes llevar 4 pokemones al mismo tiempo.");
        mostrarMenu();
    }
}

function liberarPokemon() {
    if (lista.length === 0) {
        alert("No tenes ningun pokemon.");
    } else {
        let elementos = "Tus pokemones son:\n";
        lista.forEach((elem, indice) => {
            elementos += (indice + 1) + ". " + elem.nombre + "\n";
        });
        alert(elementos);

        // let indice = parseInt(prompt("Que pokemon vas a liberar? ")) - 1;
        let indice = prompt("Que pokemon vas a liberar? ") - 1;
        if (indice >= 0 && indice < lista.length) {
            let borrarPokemon = lista.splice(indice, 1);
            alert(borrarPokemon[0].nombre + " deja el equipo.");
        } else {
            alert("No es una opcion valida.");
        }
    }
    mostrarMenu();
}

function mostrarEquipo() {
    if (lista.length === 0) {
        alert("No tenes ningun pokemon.");
    } else {
        let elementos = "Tu equipo esta formado por:\n";
        lista.forEach((elem, indice) => {
            elementos += (indice + 1) + ". " + elem.nombre + " ---> " + "Poder: " + elem.poder + " - " + "Tipo: " + elem.tipo + " - " + "Debilidad: " + elem.debilidad + "\n";
        });
        alert(elementos);
    }
    mostrarMenu();
}

function mostrarMenu() {
    let opcion = prompt("Elegir: \n1. Buscar Pokemon\n2. Liberar Pokemon\n3. Mostrar Equipo\n4. Confirmar Equipo.\n5. Abandonar aventura.\n");
    switch (opcion) {
        case "1":
            agregarPokemon();
            break;

        case "2":
            liberarPokemon();
            break;

        case "3":
            mostrarEquipo();
            break;

        case "4":
            if (lista.length === 0) {
                alert("No vas a llegar a ningun lado sin un equipo.");
                mostrarMenu();
            } else if (lista.length > 0 && lista.length < 3)
                alert("Tu equipo no esta completo. Va a ser un viaje complicado.");
            else
                alert("Estas listo para enfrentarte a quien sea!!!");
            break;

        case "5":
            alert("Se acabo tu busqueda por ser el mejor entrenador.");
            break;

        default:
            alert("No es una opcion valida");
            mostrarMenu();
            break;
    }
}
/* */


/* Programa Principal */
mostrarMenu();