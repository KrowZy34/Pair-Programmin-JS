// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Tallarines Verdes", precio: 12, stock: 8 },
    { nombre: "Aji de gallina", precio: 10, stock: 10 }
];

function contarPlatos() {
    totalplato = menu.length;
    console.log(`Total de platos en el menu es ${totalplato}`);
}

function buscarPlatoNombre(nombre) {
    let resultado = menu.find(function (plato) {
        return plato.nombre.toLowerCase() === nombre.toLowerCase();
    })
    return resultado;
}

function stockMinimo() {
    let stockminimo = menu.filter(function (plato) {
        return plato.stock <= 1;
    });
    return stockMinimo;
}

function stockAlto() {
    let stockalto = menu.filter(function (plato) {
        return plato.stock >= 20;
    });
    return stockalto;
}

function resumenMenu() {
    let resumen = menu.map(function (plato) {
        return plato.nombre + "S/" + plato.precio + "Stock" + plato.stock;
    });
    return resumen;
}

function mostrarResultado(lista) {
    const output = document.getElementById("output");
    let html = "<ul>";
    lista.forEach(plato => {
        html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
    });
    html += "</ul>";
    output.innerHTML = html;
}

function mostrarTextoEnPantalla(lista) {
    const output = document.getElementById("output");
    output.innerHTML = "<ul>" + lista.map(item => `<li>${item}</li>`).join("") + "</ul>";
}

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar

    // crear una lista HTML simple
    let html = "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
    }

    html += "</ul>";
    output.innerHTML = html;
    contarPlatos();
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Ceviche Mixto", precio: 48, stock: 10 };
    menu.push(nuevoPlato);
}




// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();

});

document.getElementById("btnAgregar").addEventListener("click", () => {
    agregarPlatoDemo();
    renderMenu();
});

document.getElementById("btnNombre").addEventListener("click", () => {
    let nombre = document.getElementById("inputNombre");
    let resultado = buscarPlatoNombre(nombre);
    mostrarResultado(resultado ? [resultado] : ["No se encontro el plato"]);
});

document.getElementById("btnStockBajo").addEventListener("click", () => {
    mostrarResultado(stockMinimo());
});

document.getElementById("btnStockAlto").addEventListener("click", () => {
    mostrarResultado(stockAlto());
});
