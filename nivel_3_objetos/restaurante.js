let cliente = {
    nombre: "Juan",
    hambre: 100,
    dinero: 80
}

function mostrarEstado() {
    console.log(`|----------------------------|`);
    console.log(`| Nombre del cliente: ${cliente.nombre}   |`);
    console.log(`| Hambre del cliente: ${cliente.hambre}    |`);
    console.log(`| Dinero del cliente: ${cliente.dinero}     |`);
    console.log(`|----------------------------|`);
}

function ordenarComida() {
    valorComida = 50;
    cliente.hambre = cliente.hambre - valorComida;
    console.log(`El cliente ${cliente.nombre} ordenó una comida que lo satisfajo.`)
    console.log(`El hambre del cliente ${cliente.nombre} pasa a ser: ${cliente.hambre}`)
}



function pagarComida() {
    precioComida = 40;
    cliente.dinero = cliente.dinero - precioComida;
    console.log(`El cliente ${cliente.nombre} pago la comida con un ${precioComida}`)
    console.log(`El cliente ${cliente.nombre} tiene ahora dinero el monto de  ${cliente.dinero} `)


}
mostrarEstado();
console.log("");
ordenarComida();
console.log("");
pagarComida();
console.log("");
mostrarEstado();

