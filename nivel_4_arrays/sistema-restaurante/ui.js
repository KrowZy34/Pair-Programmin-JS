import { menu, agregarPlatoDemo } from "./menu.js";
import {
    contarPlatos,
    buscarPlatoNombre,
    stockMinimo,
    stockAlto,
    resumenMenu,
    venderPlato,
    verificarEstadoGeneral,
    venderPlatoAsync
} from "./operaciones.js";








export async function mostrarResultadoAsync(resultado) {

    try {
        mostrarResultado("Procesando...");
        const resultado = await venderPlatoAsync(nombre, cantidad);
        mostrarResultado(resultado);
        renderMenu();


    } catch (error) {
        mostrarResultado(error.message);
    }


}

export function mostrarResultado(resultado) {
    const output = document.getElementById("output");
    let html = "<ul>";
    resultado.forEach(item => {
        if (typeof item === "string") {
            html += `<li>${item}</li>`;
        } else {
            html += `<li>${item.nombre} — S/ ${item.precio} — Stock: ${item.stock}</li>`;
        }
    });
    html += "</ul>";
    output.innerHTML = html;
}

export function mostrarTextoEnPantalla(lista) {
    const output = document.getElementById("output");
    output.innerHTML = "<ul>" + lista.map(item => `<li>${item}</li>`).join("") + "</ul>";
}

export function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    let html = "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        let estado = "";
        let clase = "";

        if (plato.stock === 0) {
            estado = "Agotado";
            clase = "agotado";
        } else if (plato.stock <= 3) {
            estado = "Stock bajo";
            clase = "bajo";
        } else {
            estado = "Stock normal";
            clase = "normal";
        }

        html += `<li class="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} — ${estado}</li>`;
    }

    html += "</ul>";
    html += "<p><strong>" + verificarEstadoGeneral() + "</strong></p>";
    output.innerHTML = html;
    contarPlatos();
}

export function conectarBotones() {
    document.getElementById("btnMostrar").addEventListener("click", () => {
        renderMenu();

    });

    document.getElementById("btnAgregar").addEventListener("click", () => {
        agregarPlatoDemo();
        renderMenu();
    });

    document.getElementById("btnNombre").addEventListener("click", () => {
        let nombre = document.getElementById("inputNombre").value;
        let resultado = buscarPlatoNombre(nombre);
        mostrarResultado(resultado ? [resultado] : ["No se encontro el plato"]);
    });

    document.getElementById("btnStockBajo").addEventListener("click", () => {
        mostrarResultado(stockMinimo());
    });

    document.getElementById("btnStockAlto").addEventListener("click", () => {
        mostrarResultado(stockAlto());
    });

    document.getElementById("btnResumen").addEventListener("click", () => {
        mostrarTextoEnPantalla(resumenMenu());
    });

    document.getElementById("btnVender").addEventListener("click", () => {
        let nombre = document.getElementById("inputVender").value;
        let cantidad = document.getElementById("inputCantidad").value;
        let resultado = venderPlato(nombre, cantidad);
        mostrarResultado(resultado ? [resultado] : ["No se encontro el plato"]);
    });


}
