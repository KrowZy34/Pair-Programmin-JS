let heroe1 = "Silver Surfer";
let vidaHeroe1 = 100;

let heroe2 = "Spiderman";
let vidaHeroe2 = 100;

function ataque() {
    daño = 30;
    vidaHeroe2 = vidaHeroe2 - daño;
    console.log(`${heroe1} ataca a ${heroe2} con un daño de ${daño}`);
    return daño;
}
function defender() {
    defensa = 20;
    vidaHeroe2 = vidaHeroe2 + defensa;
    console.log(`${heroe2} defiende con un defensa de ${defensa}`);
    return defensa;
}

function superAtaque() {
    superA = 50;
    vidaHeroe1 = vidaHeroe1 - superA;
    console.log(`${heroe2}  lanza un super ataque a ${heroe1} con un daño de ${superA}`);
    return superA;
}

function recargaEnergia() {
    recargenergia = vidaHeroe1 + 30;
    console.log(`${heroe1} recarga su energia , su vida ahora es ${recargenergia} `);
    return recargenergia
}

function escudoMagico() {
    escudomagico = 40;
    vidaHeroe1 = vidaHeroe1 + escudomagico;
    console.log(`${heroe1} activa su escudo magico , su vida ahora es ${escudomagico} `);
    return escudomagico
}

ataque();
defender();
superAtaque();
recargaEnergia();
escudoMagico();