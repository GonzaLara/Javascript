// Para cargar los objetos desde el JSON local
const cargarObjetos = async () => {
    try {
        const respuesta = await fetch('./javascript/equipo.json');
        if (respuesta.status === 200) {
            const dato = await respuesta.json();

            let objetos = '';
            dato.arrayObjetos.forEach(objeto => {
                objetos += `
                <div class="items">
                    <img class="imagen" src="${objeto.imagen}">
                    <h1>${objeto.nombre}</h1>
                    <p>${objeto.descripcion}</p>
                    <table>
                    <tbody>
                    <tr>
                    <td>Rareza</td>
                    <td>Cantidad</td>
                    <td>Compra</td>
                    <td>Venta</td>
                    </tr>
                    <tr>
                    <td>${objeto.rareza}</td>
                    <td>${objeto.cantidad}</td>
                    <td>${objeto.precio}</td>
                    <td>${objeto.venta}</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                `
            });
            document.getElementById("cont").innerHTML = objetos;
        }
    } catch (error) {
        console.error(error);
    }
}

// Para cargar las armas desde el JSON local
const cargarArmas = async () => {
    try {
        const respuesta = await fetch('./javascript/equipo.json');
        if (respuesta.status === 200) {
            const dato = await respuesta.json();

            let armas = '';
            dato.arrayArmas.forEach(arma => {
                armas += `
                <div class="items weapons">
                    <img class="imagen" src="${arma.imagen}">
                    <h1>${arma.nombre}</h1>
                    <p>${arma.descripcion}</p>
                </div>
                `
            });
            document.getElementById("cont2").innerHTML = armas;
        }
    } catch (error) {
        console.error(error);
    }
}

cargarObjetos();
cargarArmas();