//let nombre = "Spiderman";
//let poder = "Teleraña";
//let energia = 100;
//let ciudad = "Nueva York";
//let enemigo = "Escorpion";

//console.log(`El nombre del heroe es ${nombre}`);
//console.log(`Su poder  es ${poder}`);
//console.log(`Su energia es de ${energia}`);
//console.log(`Defiende a la ${ciudad} de ${enemigo}`);

//energia = 70;
//console.log(`Su energis ahora es de ${energia}`)

//let energia = 100;

//function ataque() {
//    energia = energia - 20;
//    console.log(`Su energia ahora es de ${energia}`)
//}

//function defender() {
//    energia = energia - 10;
//    console.log(`Su energia ahora es de ${energia}`)
//}

//function recargaEnergia() {
//    energia = energia + 20;
//    console.log(`aSu energia hora es de ${energia}`)
//}

//ataque();
//defender();
//recargaEnergia();


/*let cliente = {
    nombre: "Pedro",
    dinero: 100,
    hambre: 20
}

function OrdenarComida(cliente) {
    if (cliente.dinero >= 20) {
        console.log(`${cliente.nombre} puede ordenar comida`);
        cliente.dinero = cliente.dinero - 20;
        cliente.hambre = cliente.hambre - 20;
        console.log(`El cliente ${cliente.nombre} tiene ahora de dinero ${cliente.dinero} y esta sastifecho ${cliente.hambre}`)

    } else {
        console.log(`El cliente ${cliente.nombre} no puede ordenar comida`)
    }
}

OrdenarComida(cliente);

*/



let menu = [
    { nombre: "Lomo Saltado ", precio: 50, stock: 10 },
    { nombre: "Arroz con Pollo ", precio: 20, stock: 5 },
    { nombre: "Sopa a la minuta ", precio: 10, stock: 15 },
    { nombre: "Ceviche ", precio: 40, stock: 20 },
    { nombre: "Chaulfa ", precio: 30, stock: 25 },
]

function mostrarMenu() {
    console.log("---Menu del dia ---");
    for (let i = 0; i < menu.length; i++) {
        console.log(menu[].nombre);
    }
}





