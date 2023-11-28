class Monstruo {
    constructor(nombre, habitat, tipo, descripcion, amenaza) {
        this.nombre = nombre;
        this.habitat = habitat;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.amenaza = amenaza;
    }
}

const monstruos = [
    new Monstruo("Velocidrome", "Bosques y Colinas/Jungla/Vergel Eterno", "Wyvern Pajaro","El Velocidrome es de mayor tamaño que sus compañeros,los Velocipreys. Su gran cresta de color carmesí indica su estatus de líder y posee una gran garra rojiza tanto en las patas delanteras como en las traseras. Posee unos grandes ojos y un hocico amarillo parecido a un pico.", "fa-solid fa-star"),
    new Monstruo("Malfestio", "Selva Jurasica/Isla Desierta/Fronda Arcaica","Wyvern Pajaro" ,"El Malfestio recuerda a un búho de plumaje azul oscuro, con largas orejas que terminan en mechones amarillos y plumaje amarillo alrededor del cuello y en las patas. Sus alas denotan su origen wyvern, teniendo grandes garras como guadañas y con membranas de color azul brillante con marcas de ojos. Su rostro es blanco con marcas de lágrimas y grandes ojos rojos."),
    new Monstruo("Shogun Ceanataur", "Volcan, Pantano, Bosque Inundado", "Carapaceon","El Shogun Ceanataur posee un exoesqueleto azul con numerosas partes dentadas y aserradas. Su cabeza posee una cresta puntiaguda con largas antenas y sus pinzas tienen forma de cuchilla. Suele poseer su abdomen protegido por el craneo de un Gravios o un Lavasioth."),
    new Monstruo("Lagiacrus", "Bosque Inundado/Picos/Jungla", "Leviatan","El Lagiacrus es un gran wyvern de cuerpo alargado, de característico color azul con vientre claro. Sus garras, cuernos y espinas del lomo son de color marrón rojizo, volviéndose de un tono apagado cuando sale del agua. Sus escamas forman una 'capucha' en su cuello, similar al de las cobras, que le ayuda a tomar el sol, su cola es larga y tiene forma de aleta."),
    new Monstruo("Rathalos", "Templo Olvidado/Estepa Otoñal/Sima Hueca","Wyvern Volador", "El Rathalos posee la estructura típica de un wyvern. Sus escamas son de color rojo con partes negras y vientre claro, sus grandes alas poseen varias púas y en la membrana alar posee unas marcas características. Su cola acabada en un aguijón posee una maza con púas donde almacena veneno, pero son sus garras las que lo inyectan. Su cabeza es maciza y posee un morro ganchudo, orejas puntiagudas y ojos azules."),
    new Monstruo("Brachydios", "Hoyo Volcan/Lecho de los Ancianos/Volcan","Wyvern Brutal", "Como otros Wyverns brutales, el Brachydios se asemeja a un dinosaurio. Su cuerpo robusto está protegido por una coraza de color azul violáceo, mientras que sus desarrollados brazos y su cuerno en forma de torpedo están recubiertos de una sustancia verde neón que se torna amarilla cuando se enfada. Su cola acaba en una maza en forma de corona."),
    new Monstruo("Gravios", "Volcan/Selva Jurasica/Cienaga", "Wyvern Volador", "El Gravios es un gigantesco wyvern protegido por gruesas placas blancas con numerosas protuberancias que son en realidad poros. Posee alas desarrolladas, aunque rara vez vuela, y tiene musculosas patas traseras. Su cabeza recuerda a una calavera y tiene un pequeño cuerno nasal a diferencia de su forma juvenil. Su cola es gruesa y acaba en una especie de maza."),
    new Monstruo("Bazelgeuse", "Lecho de los Ancianos/Valle Putrefacto/Islas Heladas", "Wyvern Volador", "El Bazelgeuse es un monstruo dotado de alas de gran envergadura parecidas a las de un avión y caracterizado por su lomo cubierto de enormes escamas en mosaico. Su cabeza de color oscuro es relativamente pequeña y su hocico es achatado, mientras que su cola acaba en una especie de aguijón. Su rasgo principal son las numerosas escamas en forma de racimo que cuelgan de su garganta y su cola, y que funcionan como granadas que estallan al caer al suelo."),
    new Monstruo("Gore Magala", "Estepa Otoñal/Zona Sagrada/Vergel Eterno", "???", "El Gore Magala tiene el cuerpo típico de un dragón, con cuatro patas y dos alas. Está cubierto de escamas de color negro. Sus alas son grandes, armadas con zarpas de color rojo, que suelen mantenerse plegadas simulando una capa. Las membranas de las alas están cubiertas de una especie de pelo. Su cabeza carece de ojos, y cuando se enfurece unos cuernos ocultos en su cabeza se levantan, tomando un brillo morado.")
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

        nombreElemento.textContent = "Nombre: " + monstruos[monstruo - 1].nombre;
        habitatElemento.textContent = "Habitat: " + monstruos[monstruo - 1].habitat;
        tipoElemento.textContent = "Tipo: " + monstruos[monstruo - 1].tipo;
        descripcionElemento.textContent = "Descripción: " + monstruos[monstruo - 1].descripcion;

        overlay.style.display = "flex";
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 0);
    }
}