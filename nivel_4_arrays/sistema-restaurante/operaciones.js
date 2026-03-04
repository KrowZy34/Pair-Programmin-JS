import { menu } from "./menu.js";

export function contarPlatos() {
    let totalplato = menu.length;
    console.log(`Total de platos en el menu es ${totalplato}`);
}

export function buscarPlatoNombre(nombre) {
    let resultado = menu.find(function(plato) {
        return plato.nombre.toLowerCase() === nombre.toLowerCase();
    });
    return resultado;
}

export function stockMinimo() {
    let stockminimo = menu.filter(function(plato) {
        return plato.stock <= 3;
    });
    return stockminimo;
}

export function stockAlto() {
    let stockalto = menu.filter(function(plato) {
        return plato.stock >= 5;
    });
    return stockalto;
}

export function resumenMenu() {
    let resumen = menu.map(function(plato) {
        return plato.nombre + " S/" + plato.precio + " Stock: " + plato.stock;
    });
    return resumen;
}

export function simuladorRepuestas(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const falla = Math.random() < 0.3;
            if (falla) {
                reject("Error del servidor simulado");
            } else {
                resolve(resultado);
            }
        }, 2000);

    });
}

export function venderPlato(nombre, cantidad) {
    let platos = buscarPlatoNombre(nombre);
    if (!platos) {
        return "No se encontro el plato";
    }
    if (platos.stock === 0) {
        return "Plato no disponible";
    }
    if (platos.stock < cantidad) {
        return "No hay stock suficiente";
    }
    platos.stock = platos.stock - cantidad;
    return `Se vendio ${cantidad} de ${platos.nombre} y que el stock restante es ${platos.stock}`;
}

export async function venderPlatoAsync(nombre, cantidad) {
    const resultado = venderPlato(nombre, cantidad);

    if (
        resultado === "No se encontro el plato" ||
        resultado === "Plato no disponible" ||
        resultado === "No hay stock suficiente"
    ) {
        throw new Error(resultado);
    }

    const respuesta = await simuladorRepuestas(resultado);
    return respuesta;
}

export function verificarEstadoGeneral() {
    let estadoAgotado = 0;
    let estadoBajo = 0;

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].stock == 0) {
            estadoAgotado++;
        } else if (menu[i].stock <= 3) {
            estadoBajo++;
        }
    }
    if (estadoAgotado > 0) {
        return `Hay ${estadoAgotado} platos agotados`;
    }
    if (estadoBajo > 0) {
        return `Hay ${estadoBajo} platos con stock bajo`;
    }
    return `Todos los platos disponibles`;
}
