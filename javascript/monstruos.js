class Monstruo {
    constructor(nombre, habitat, tipo, caracteristicas, amenaza) {
        this.nombre = nombre;
        this.habitat = habitat;
        this.tipo = tipo;
        this.caracteristicas = caracteristicas;
        this.amenaza = amenaza;
    }
}

const monstruos = [
    new Monstruo("VELOCIDROME", "Bosques y Colinas/Jungla/Vergel Eterno", "Wyvern Pajaro", "", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("DAIMYO HERMITAUR", "Desierto/Jungla/Bosque Inundado", "Carapaceon", "El Daimyio Hermitaur es un  gran cangrejo de caparazón rojo con rayas blancas en su coraza y grandes pinzas en forma de escudo. Su abdomen está protegido por un gran cráneo de Monoblos. Atacara principalmente con sus enormes pinzas. Ademas puede disparar potentes chorros de agua o cargar velozmente hacia su presa.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("SHOGUN CEANATAUR", "Volcan, Pantano, Bosque Inundado", "Carapaceon", "El Shogun Ceanataur posee un exoesqueleto azul con numerosas partes dentadas y aserradas que suele estar protegido por el craneo de un Gravios. Utilizara sus grandes pinzas en forma de hoz, que inicialmente se encuentran plegadas, pero que se extienden cuando se enfada para cortar a cualquiera que se acerque.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("LAGIACRUS", "Bosque Inundado/Picos/Jungla", "Leviatan", "El Lagiacrus tiene un cuerpo alargado, de caracteristico color azul con vientre claro. Es capaz de generar una gran cantidad de electricidad en su espina dorsal que usa para generar escudos electricos y explosiones de rayos. Trata de llevar a su presa al agua donde se convierte en una amenaza mucho mayor.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("LAGIACRUS MARMOREO", "Bosque Inundado/Isla Desierta", "Leviatan", "Esta subespecie de color palido tiene cuernos y garras de un intenso color azul electrico. Habita los mismos lugares que su pariente azul, pero pasa mayor tiempo en tierra donde es tan habil que puede cazar sin problemas con ataques de rayo potenciados.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star-half-stroke'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> "),
    new Monstruo("LAGIACRUS ABISAL", "Ruina Submarina", "Leviatan", "Visible desde los abismos mas oscuros, las espinas y cuernos del Lagiacrus Abisal brillan de un hermoso azul electrico. Su comportamiento, alimentacion y habitos son desconocidos pues su mencion solo aparece en leyendas. Siempre esta en estado cargado y sus descargas electricas son muchisimo mas potente que la de cualquier otro Lagiacrus.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("RATHIAN", "Bosque Primigenio/Sima Hueca/Templo Olvidado", "Wyvern Volador", "La Rathian posee la estructura corporal tipica de un Wyvern con escamas verdes y una larga cola que utiliza para envenenar a sus presas. A diferencia del Rathalos, prefiere combatir en tierra y ataque principalmente con embestidas, coletazos y bolas de fuego.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("RATHIAN ROSA", "Yermo de Agujas/Jungla/Monte Cielo", "Wyvern Volador", "Al igual que la Rathian comun, puede encontrarse en desiertos, selvas y zonas templadas, pero suele preferir las zonas tropicales. Gracias a que sus placas oseas son mas resistentes aguanta mejor los combates y es mas veloz al atacar.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("RATHIAN DORADA", "Arena Forlorn/Tierras Destino/Torre", "Wyvern Volador", "Se trata de una variante con escamas doradas muy poco comun que pocos cazadores han logrado ver y mucho menos cazar. Es capaz de utilizar el fuego infernal, indicado como un brillo azulado emanando de su pecho, que vuelve sus ataques de fuego mucho mas poderosos. Su veneno tambien es extremadamente potente, por lo que cortarle la cola es de vital importancia.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("RATHALOS", "Templo Olvidado/Estepa Otoñal/Sima Hueca", "Wyvern Volador", "El Rathalos posee una esctructura muy similar a la Rathian pero sus escamas son de color rojo y su cola acabada en un aguijon posee una maza con puas donde almacena veneno, pero son sus garras las que lo inyectan. El combate aereo es su especialida.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("RATHALOS CELESTE", "Lecho de los Ancianos/Sima Hueca/Monte Cielo", "Wyvern Volador", "Posee una gran habilidad de vuelo y asesta golpes letales desde el cielo. Sus fuertes alas le permiten volar durante mayor tiempo y con mayor eficacia que el Rathalos comun.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("RATHALOS PLATEADO", "Arena Forlorn/Tierras Destino/Torre", "Wyvern Volador", "Esta especie rara posee escamas brillantes de color plateado y al igual que la Rathian Dorada utiliza el fuego infernal, con el cual lanza mortales bolas de fuego desde el aire que rara vez fallan.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("BRACHYDIOS", "Hoyo Volcan/Lecho de los Ancianos/Volcan", "Wyvern Brutal", "El Brachydios se asemeja a un dinosaurio con un cuerpo robusto protegido por una coraza de color azul. Lo que hace especialmente peligroso a este monstruo es el hongo mucoso que cubre sus puños y cuerno ya que al golpear con ellos dejara charcos de baba que explotaran tras unos segundos.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("BRACHYDIOS COLERICO", "Isla Ingel/Tierras Destino", "Wyvern Brutal", "Es mas grande que un Brachydios normal, y sus escamas tienen un tono verde oscuro. Lo que destaca de esta variante es que esta casi enteramente cubierto de baba explosiva de tono amarillo que se torna rojo cuando se enfurece. Es mas lento que su forma normal, pero sus ataques son mucho mas potentes y puede acabar con los cazadores de un solo golpe si no tienen cuidado.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("GRAVIOS", "Volcan/Selva Jurasica/Cienaga", "Wyvern Volador", "El Gravios es un gigantesco wyvern protegido por gruesas placas blancas que posee alas desarrolladas, aunque rara vez vuela y con una cola que se asemeja a una  maza. Es capaz de lanzar un poderoso rayo termico y debido a su enorme tamaño sus ataques físicos infligen un daño considerable.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("GRAVIOS NEGRO", "Volcan/Selva Jurasica/Vergel Eterno", "Wyvern Volador", "Es considerado una subespecie, pero el Gravios Negro es en realidad un Gravios comun cuyo caparazon sufrio cambios debido a estar expuesto a temperaturas extremadamente altas. Es muchisimo mas agresivo que su contraparte comun y atacara apenas ver a cualquier ser vivo que entre en su territorio.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("BAZELGEUSE", "Lecho de los Ancianos/Valle Putrefacto/Islas Heladas", "Wyvern Volador", "El Bazelgeuse es un monstruo dotado de alas de gran envergadura parecidas a las de un avión y caracterizado por su lomo cubierto de enormes escamas en forma de racimo que cuelgan de su garganta y su cola, las cuales se incrustan en la tierra volviendose minas que detonan al acercarse.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star-half-stroke'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("BAZELGEUSE MAGMA", "Lecho de los Ancianos/Tierras Destino/Altiplanos Coralinos", "Wyvern Volador", "Sus escamas siempre estan encendidas y brillando de un color naranja intenso como el magma. Estas pueden volverse incluso mas calientes cuando se enfurece, y brillar de un tono morado indicando que han llegado a su punto de mayor volatilidad. Se trata de un monstruo invasivo que puede aparecer en cualquier area, siendo muy peligroso por el rango amplio de sus explosiones.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("GORE MAGALA", "Estepa Otoñal/Zona Sagrada/Vergel Eterno", "???", "El Gore Magala es un ser unico, que comparte rasgos y similtudes a los de los Dragones Ancianos, esto por ser justamente un Dragon Anciano que todavia no ha madurado. Es un monstruo agresivo cuyos ojos no son visibles que produce un virus llamado Colera con el cual infecta a otros monstruos causandoles comportamientos anormales.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star-half-stroke'></i> <i class='fa-regular fa-star'></i> <i class='fa-regular fa-star'></i>"),
    new Monstruo("GORE MAGALA CAOTICO", "Bastion/Estepa Otoñal/Arena Forlorn", "???", "Es un Gore Magala comun que ha sido interrumpido duarnte el proceso de muda en el cual se transforma en un Dragon Anciano. Como resultado, recuerda a una mezcla de un Gore y un Shagaru Magala. El estres y trauma que conlleva el no completar el proceso de muda ha provocado que esta variante se vuelva increiblemente agresiva.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i>"),
    new Monstruo("SHAGARU MAGALA", "Zona Sagrada/Bastion/Arena Forlorn", "Dragon Anciano", "En su forma adulta el Shagaru Magala sufre un gran cambio en comparacion a su forma juvenil, su piel de color negro es remplazada por fuertes y relucientes escamas doradas, los cuernos y los ojos ya no estan ocultos, y sus alas rasgadas ahora son unas potentes hojas que cuando se abren del todo tienen un aspecto parecido a una estrella.", "Amenaza: <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star-half-stroke'></i>"),
];

class Contrato {
    constructor(imagen, objetivo, recompensa, costo, ubicacion) {
        this.imagen = imagen;
        this.objetivo = objetivo;
        this.recompensa = recompensa;
        this.costo = costo;
        this.ubicacion = ubicacion;
    }
}

const contratos = [
    new Contrato("./imagenes/iconoVelocidrome.png", "Caza 1 Velocidrome", "1000p", "100p", "Jungla"),
    new Contrato("./imagenes/iconoDaimyio.png", "Caza 1 Daimyio Hermitaur", "2500p", "250p", "Selva Jurasica"),
    new Contrato("./imagenes/iconoCeanataur.png", "Caza 1 Shogun Ceanataur", "3000p", "300p", "Bosque Inundado"),
    new Contrato("./imagenes/iconoLagiacrus.png", "Caza 1 Lagiacrus", "3500p", "350p", "Picos"),
    new Contrato("./imagenes/iconoLagiacrusMarmoreo.png", "Caza 1 Lagiacrus Marmoreo", "4000p", "400p", "Isla Desierta"),
    new Contrato("./imagenes/iconoLagiacrusAbismo.png", "Caza 1 Lagiacrus Abisal", "5000p", "500p", "Ruina Submarina"),
    new Contrato("./imagenes/iconoRahian.png", "Caza 1 Rathian", "3000p", "300p", "Templo Olvidado"),
    new Contrato("./imagenes/iconoRahianRosa.png", "Caza 1 Rathian Rosa", "3500p", "350p", "Yermo de Agujas"),
    new Contrato("./imagenes/iconoRahianDorada.png", "Caza 1 Rathian Dorada", "8000p", "800p", "Arena Forlorn"),
    new Contrato("./imagenes/iconoRathalos.png", "Caza 1 Rathalos", "4500p", "450p", "Estepa Otoñal"),
    new Contrato("./imagenes/iconoRathalosCeleste.png", "Caza 1 Rathalos Celeste", "5000p", "500p", "Monte Cielo"),
    new Contrato("./imagenes/iconoRathalosPlateado.png", "Caza 1 Rathalos Plateado", "8000p", "800p", "Lecho de los Ancianos"),
    new Contrato("./imagenes/iconoBrachydios.png", "Caza 1 Brachydios", "4700p", "470p", "Volcan"),
    new Contrato("./imagenes/iconoBrachydiosColerico.png", "Caza 1 Brachydios Colerico", "11000p", "1100p", "Tierras Destino"),
    new Contrato("./imagenes/iconoGravios.png", "Caza 1 Gravios", "5250p", "525p", "Volcan"),
    new Contrato("./imagenes/iconoGraviosNegro.png", "Caza 1 Gravios Negro", "7500p", "750p", "Volcan"),
    new Contrato("./imagenes/iconoBazelgeuse.png", "Caza 1 Bazelgeuse", "7700p", "770p", "Lecho de los Ancianos"),
    new Contrato("./imagenes/iconoBazelgeuseMagma.png", "Caza 1 Bazelgeuse Magma", "9900p", "990p", ""),
    new Contrato("./imagenes/iconoGore.png", "Caza 1 Gore Magala", "7200p", "720p", "Vergel Eterno"),
    new Contrato("./imagenes/iconoCaotico", "Caza 1 Gore Magala Caotico", "12000p", "1200p", "Bastion"),
    new Contrato("./imagenes/iconoShagaru", "Abate 1 Shagaru Magala", "15000p", "1500p", "Zona Sagrada")
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
        const tipoElemento = document.getElementById('tipoMonstruo');
        const descripcionElemento = document.getElementById('descripcionMonstruo');
        const amenazaElemento = document.getElementById('amenazaMonstruo');

        if (monstruo >= 1 && monstruo <= monstruos.length) {
            nombreElemento.textContent = monstruos[monstruo - 1].nombre;
            habitatElemento.textContent = "Habitat: " + monstruos[monstruo - 1].habitat;
            tipoElemento.textContent = "Tipo: " + monstruos[monstruo - 1].tipo;
            descripcionElemento.textContent = "Caracteristicas: " + monstruos[monstruo - 1].caracteristicas;
            amenazaElemento.innerHTML = monstruos[monstruo - 1].amenaza;

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

        const imagenElemento = document.getElementById('imagenMision');
        const objetivoElemento = document.getElementById('objetivoMision');
        const recompensaElemento = document.getElementById('recompensaMision');
        const costoElemento = document.getElementById('costoMision');
        const ubicacionElemento = document.getElementById('ubicacionMision');

        if (contrato >= 1 && contrato <= contratos.length) {
            imagenElemento.src = contratos[contrato - 1].imagen;
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
}