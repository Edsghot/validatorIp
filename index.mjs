import readline from 'readline';
import net from 'net';

function obtenerClaseIP(ip) {
    const primerOcteto = parseInt(ip.split('.')[0]);
    if (primerOcteto >= 0 && primerOcteto <= 127) {
        return 'A';
    } else if (primerOcteto >= 128 && primerOcteto <= 191) {
        return 'B';
    } else if (primerOcteto >= 192 && primerOcteto <= 223) {
        return 'C';
    } else {
        return 'Desconocida';
    }
}

function obtenerMascaraSubred(claseIP) {
    switch (claseIP) {
        case 'A':
            return '255.0.0.0';
        case 'B':
            return '255.255.0.0';
        case 'C':
            return '255.255.255.0';
        default:
            return 'Desconocida';
    }
}

function obtenerMascaraCIDR(claseIP) {
    switch (claseIP) {
        case 'A':
            return '/8';
        case 'B':
            return '/16';
        case 'C':
            return '/24';
        default:
            return 'Desconocida';
    }
}

function obtenerIDRed(ip, claseIP) {
    const octetos = ip.split('.');
    switch (claseIP) {
        case 'A':
            return `${octetos[0]}.0.0.0`;
        case 'B':
            return `${octetos[0]}.${octetos[1]}.0.0`;
        case 'C':
            return `${octetos[0]}.${octetos[1]}.${octetos[2]}.0`;
        default:
            return 'Desconocido';
    }
}

function obtenerIPRed(ip, claseIP) {
    const octetos = ip.split('.');
    switch (claseIP) {
        case 'A':
            return `${octetos[0]}.0.0.0`;
        case 'B':
            return `${octetos[0]}.${octetos[1]}.0.0`;
        case 'C':
            return `${octetos[0]}.${octetos[1]}.${octetos[2]}.0`;
        default:
            return 'Desconocida';
    }
}

function obtenerIPHost(ip, claseIP) {
    const octetos = ip.split('.');
    switch (claseIP) {
        case 'A':
            return `0.${octetos[1]}.${octetos[2]}.${octetos[3]}`;
        case 'B':
            return `0.0.${octetos[2]}.${octetos[3]}`;
        case 'C':
            return `0.0.0.${octetos[3]}`;
        default:
            return 'Desconocida';
    }
}

function obtenerIDHost(ip, claseIP) {
    const octetos = ip.split('.');
    switch (claseIP) {
        case 'A':
            return `${octetos[1]}.${octetos[2]}.${octetos[3]}`;
        case 'B':
            return `${octetos[2]}.${octetos[3]}`;
        case 'C':
            return `${octetos[3]}`;
        default:
            return 'Desconocido';
    }
}

function esIPValida(ip) {
    return net.isIP(ip);
}

function main(ip) {

    console.log("===============================================");
    console.log("====Nombre: Ed soto huamanhorcco  =============");
    console.log("===============================================");
    console.log("==========INFO: " + ip + "=======");
    console.log("===============================================");
    console.log(" ");

    if (esIPValida(ip)) {
        const claseIP = obtenerClaseIP(ip);
        console.log(`CLASE: ${claseIP}`);
        console.log("---------------------");

        const mascaraSubred = obtenerMascaraSubred(claseIP);
        console.log(`Máscara: ${mascaraSubred}`);
        console.log("---------------------");

        const mascaraCIDR = obtenerMascaraCIDR(claseIP);
        console.log(`Máscara: ${mascaraCIDR}`);
        console.log("---------------------");

        const idRed = obtenerIDRed(ip, claseIP);
        console.log(`ID de la red: ${idRed}`);
        console.log("---------------------");

        const ipRed = obtenerIPRed(ip, claseIP);
        console.log(`IP de la red: ${ipRed}`);
        console.log("---------------------");

        const ipHost = obtenerIPHost(ip, claseIP);
        console.log(`IP del host: ${ipHost}`);
        console.log("---------------------");

        const idHost = obtenerIDHost(ip, claseIP);
        console.log(`ID del host: ${idHost}`);
        console.log("---------------------");
    } else {
        console.error('La entrada proporcionada no es una dirección IP válida.');
    }

    console.log("");
    console.log("");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("");
rl.question('Por favor, introduce una dirección IP: ', (input) => {
    main(input);
    rl.close();
});
