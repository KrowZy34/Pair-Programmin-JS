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
        return plato.stock <= 3;
    });
    return stockminimo;
}

function stockAlto() {
    let stockalto = menu.filter(function (plato) {
        return plato.stock >= 5;
    });
    return stockalto;
}

function resumenMenu() {
    let resumen = menu.map(function (plato) {
        return plato.nombre + "S/" + plato.precio + "Stock" + plato.stock;
    });
    return resumen;
}


function venderPlato(nombre, cantidad) {
    let platos = buscarPlatoNombre(nombre);
    if (!platos) {

        return "No se encontro el plato";
    }
    if (platos.stock === 0) {
        return "Plato no disponible  "
    }
    if (platos.stock < cantidad) {
        return "No hay stock suficiente"
    }
    platos.stock = platos.stock - cantidad;
    return `Se vendio ${cantidad} de ${platos.nombre}  y que el stock restante es ${platos.stock}`;
}


function verificarEstadoGeneral() {
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
    return `Todos los paltos disponibles`;

}


function mostrarResultado(resultado) {
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

function mostrarTextoEnPantalla(lista) {
    const output = document.getElementById("output");
    output.innerHTML = "<ul>" + lista.map(item => `<li>${item}</li>`).join("") + "</ul>";
}

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
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


