export let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Tallarines Verdes", precio: 12, stock: 8 },
    { nombre: "Aji de gallina", precio: 10, stock: 10 }
];

export function resumenMenu() {
    let resumen = menu.map(function(plato) {
        return plato.nombre + "S/" + plato.precio + "Stock" + plato.stock;
    });
    return resumen;
}

export function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Ceviche Mixto", precio: 48, stock: 10 };
    menu.push(nuevoPlato);
}


