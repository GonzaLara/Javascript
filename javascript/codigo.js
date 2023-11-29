class Monstruo {
    constructor(nombre, habitat, tipo, descripcion, combate, amenaza) {
        this.nombre = nombre;
        this.habitat = habitat;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.combate = combate;
        this.amenaza = amenaza;
    }
}

const monstruos = [
    new Monstruo("Velocidrome", "Bosques y Colinas/Jungla/Vergel Eterno", "Wyvern Pajaro","El Velocidrome es de mayor tamaño que sus compañeros,los Velocipreys. Su gran cresta de color carmesí indica su estatus de líder y posee una gran garra rojiza tanto en las patas delanteras como en las traseras. Posee unos grandes ojos y un hocico amarillo parecido a un pico.", "Es un monstruo rápido, pero aún así es bastante débil. Ataca con mordiscos y saltos, además es capaz de llamar a Velocipreys para atacar en equipo."),
    new Monstruo("Malfestio", "Selva Jurasica/Isla Desierta/Fronda Arcaica","Wyvern Pajaro" ,"El Malfestio recuerda a un búho de plumaje azul oscuro, con largas orejas que terminan en mechones amarillos y plumaje amarillo alrededor del cuello y en las patas. Sus alas denotan su origen wyvern, teniendo grandes garras como guadañas y con membranas de color azul brillante con marcas de ojos.", "Ataca principalmente con las alas de sus garras o con sus patas traseras, también puede realizar numerosos ataques aéreos. Al agitar el plumón amarillo de su cuello crea nubes de polen amarillo, el cual genera confusión en sus presas."),
    new Monstruo("Shogun Ceanataur", "Volcan, Pantano, Bosque Inundado", "Carapaceon","El Shogun Ceanataur posee un exoesqueleto azul con numerosas partes dentadas y aserradas. Su cabeza posee una cresta puntiaguda con largas antenas y sus pinzas tienen forma de cuchilla. Suele poseer su abdomen protegido por el craneo de un Gravios.", "Ataca utilizando sus grandes pinzas en forma de hoz, que inicialmente se encuentran plegadas, pero que se extienden cuando se enfada.Si se le rompe su coraza protectora, quedará vulnerable e intentará esconderse bajo tierra para buscar otra protección."),
    new Monstruo("Lagiacrus", "Bosque Inundado/Picos/Jungla", "Leviatan","El Lagiacrus es un gran wyvern de cuerpo alargado, de característico color azul con vientre claro. Sus garras, cuernos y espinas del lomo son de color marrón rojizo, volviéndose de un tono apagado cuando sale del agua.", "Es capaz de generar una gran cantidad de electricidad en su espina dorsal. En el agua puede generar escudos eléctricos y una explosión de rayos, también puede imbuir sus ataques normales con un aura eléctrica y lanzar proyectiles."),
    new Monstruo("Rathalos", "Templo Olvidado/Estepa Otoñal/Sima Hueca","Wyvern Volador", "El Rathalos posee la estructura típica de un wyvern. Sus escamas son de color rojo con partes negras y vientre claro, sus grandes alas poseen varias púas y en la membrana alar posee unas marcas características. Su cola acabada en un aguijón posee una maza con púas donde almacena veneno, pero son sus garras las que lo inyectan.", "Tiene una gran variedad de ataques aéreos, como lanzar multiples bolas de fuego y embestir al cazador con sus garras venenosas dejándolo aturdido y envenenado. Su rugido deja desprotegidos a los cazadores en tierra vulnerables a embestidas."),
    new Monstruo("Brachydios", "Hoyo Volcan/Lecho de los Ancianos/Volcan","Wyvern Brutal", "Como otros Wyverns brutales, el Brachydios se asemeja a un dinosaurio. Su cuerpo robusto está protegido por una coraza de color azul violáceo, mientras que sus desarrollados brazos y su cuerno en forma de torpedo están recubiertos de una sustancia verde que se torna amarilla cuando se enfada.", "Se diferencia de otros monstruos de su clase por sus poderosas patas delanteras, que son su principal arma, con la que propina fuertes puñetazos. Lo que hace especialmente peligroso a este monstruo es el hongo mucoso que cubre sus puños y cuerno. Al golpear con ellos dejará charcos de baba que explotarán tras unos segundos."),
    new Monstruo("Gravios", "Volcan/Selva Jurasica/Cienaga", "Wyvern Volador", "El Gravios es un gigantesco wyvern protegido por gruesas placas blancas con numerosas protuberancias que son en realidad poros. Posee alas desarrolladas, aunque rara vez vuela y su cola es una especie de maza.", "Posee un gran control del fuego. Es capaz de lanzar un poderoso rayo térmico o expulsar gas ardiente, y en ocasiones gas somnífero que obtiene de su dieta. Debido a su enorme tamaño sus ataques físicos infligen un daño considerable."),
    new Monstruo("Bazelgeuse", "Lecho de los Ancianos/Valle Putrefacto/Islas Heladas", "Wyvern Volador", "El Bazelgeuse es un monstruo dotado de alas de gran envergadura parecidas a las de un avión y caracterizado por su lomo cubierto de enormes escamas en mosaico. Su rasgo principal son las numerosas escamas en forma de racimo que cuelgan de su garganta y su cola.", "Su principal habilidad es la de soltar escamas explosivas que se incrustan en la tierra, volviéndose minas que detonan al acercarse. Sus escamas están compuestas por una mezcla de fluidos corporales y cuando la bestia se enfurece se vuelven más inestables."),
    new Monstruo("Gore Magala", "Estepa Otoñal/Zona Sagrada/Vergel Eterno", "???", "El Gore Magala tiene el cuerpo típico de un dragón. Está cubierto de escamas de color negro. Sus alas son grandes, armadas con zarpas de color rojo, que suelen mantenerse plegadas simulando una capa. Carece de ojos.Es un monstruo agresivo que puede llegar a matar a grandes wyverns, otros monstruos intentan evitarlo debido al virus Colera que produce.", "Cuando se enfada 2 antenas se desplegaran de su cabeza, su cuerpo se volvera mas brillante y lanzara sus escamas al cielo cubriendolo de un color oscuro. En este punto entrar en el estado Colerico.") ];

class Contrato {
    constructor(objetivo, recompensa, costo, ubicacion) {
        this.objetivo = objetivo;
        this.recompensa = recompensa;
        this.costo = costo;
        this.ubicacion = ubicacion;
    }
}

const contratos = [
    new Contrato("Caza 1 Velocidrome", "1000p", "100p","Jungla"),
    new Contrato("Caza 2 Malfestio", "2500p","250p" ,"Selva Jurasica"),
    new Contrato("Captura 1 Shogun Ceanataur", "2600p", "260p","Bosque Inundado"),
    new Contrato("Caza 1 Lagiacrus", "3100p", "310p","Picos"),
    new Contrato("Caza 1 Rathalos y 1 Velocidrome", "5000p","500p", "Estepa Otoñal"),
    new Contrato("Captura 2 Brachydios", "8250p","825p", "Volcan"),
    new Contrato("Caza 1 Gravios", "5500p", "550p", "Volcan"),
    new Contrato("Captura 1 Bazelgeuse y caza 2 Lagiacrus", "10000p", "1000p", "Lecho de los Ancianos"),
    new Contrato("Caza 1 Gore Magala", "8500p", "850p", "Vergel Eterno") ];

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
        const tipoElemento = document.getElementById('tipoMonstruo');
        const descripcionElemento = document.getElementById('descripcionMonstruo');
        const combateElemento = document.getElementById('combateMonstruo');

        nombreElemento.textContent = monstruos[monstruo - 1].nombre;
        habitatElemento.textContent = "Habitat: " + monstruos[monstruo - 1].habitat;
        tipoElemento.textContent = "Tipo: " + monstruos[monstruo - 1].tipo;
        descripcionElemento.textContent = "Descripción: " + monstruos[monstruo - 1].descripcion;
        combateElemento.textContent = "Combate: " + monstruos[monstruo - 1].combate;

        overlay.style.display = "flex";
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 0);
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
        const costoElemento = document.getElementById('costoMision');
        const ubicacionElemento = document.getElementById('ubicacionMision');

        objetivoElemento.textContent = "Objetivo: " + contratos[contrato - 1].objetivo;
        recompensaElemento.textContent = "Recompensa: " + contratos[contrato - 1].recompensa;
        costoElemento.textContent = "Costo Contrato: " + contratos[contrato - 1].costo;
        ubicacionElemento.textContent = "Lugar: " + contratos[contrato - 1].ubicacion;

        overlay2.style.display = "flex";
        setTimeout(() => {
            overlay2.style.opacity = 1;
        }, 0);
    }
}


// INVENTARIO
const items = document.querySelectorAll('.cont');
const inventario = document.getElementById('inventario-items');

const inventarioGuardado = localStorage.getItem('inventario');
const inventarioObj = inventarioGuardado ? JSON.parse(inventarioGuardado) : {};

const limiteObjetos = {
    'Pocion': 10,
    'Pocion Maxima': 3,
    'Piedra de Afilar': 20,
    'Bolas de Pintura': 99,
    'Trampa Electrica': 1,
    'Trampa Enredaderas': 1,
    'Bolas Tranquil.': 8,
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

function guardarInventarioEnLocalStorage() {
    localStorage.setItem('inventario', JSON.stringify(inventarioObj));
}

function agregarObjeto(event) {
    event.preventDefault();
    const elemento = event.target.parentNode;
    const nombreObjeto = elemento.querySelector('h2').textContent;

    if (inventarioObj[nombreObjeto] && inventarioObj[nombreObjeto] >= limiteObjetos[nombreObjeto]) {
        alert(`No se puede llevar mas ${nombreObjeto}`);
        return;
    }

    if (inventarioObj[nombreObjeto]) {
        inventarioObj[nombreObjeto]++;
    } else {
        inventarioObj[nombreObjeto] = 1;
    }

    mostrarInventario();
    guardarInventarioEnLocalStorage();
}

function quitarObjeto(event) {
    event.preventDefault();
    const elemento = event.target.parentNode;
    const nombreObjeto = elemento.querySelector('h2').textContent;

    if (inventarioObj[nombreObjeto] && inventarioObj[nombreObjeto] > 0) {
        inventarioObj[nombreObjeto]--;
    }

    mostrarInventario();
    guardarInventarioEnLocalStorage();
}

function mostrarInventario() {
    inventario.innerHTML = '';

    for (const objeto in inventarioObj) {
        if (inventarioObj[objeto] > 0) {
            const nuevoElemento = document.createElement('div');
            nuevoElemento.innerHTML = `<span class="letras"> <strong>${objeto}</strong>: <span>${inventarioObj[objeto]}`;
            inventario.appendChild(nuevoElemento);
        }
    }
}

items.forEach((item) => {
    const botonAgregar = item.querySelector('.agregar');
    const botonQuitar = item.querySelector('.quitar');

    botonAgregar.addEventListener('click', agregarObjeto);
    botonQuitar.addEventListener('click', quitarObjeto);
});

mostrarInventario();