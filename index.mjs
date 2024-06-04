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

function esIPValida(ip) {
    return net.isIP(ip);
}

function main(ip) {

    console.log("===============================================");
    console.log("====Nombre: Ed soto huamanhorcco  =============");
    console.log("===============================================");
    console.log("==========INFO: "+ip+"=======");
    console.log("===============================================");
    console.log(" ");
    

    if (esIPValida(ip)) {
        const claseIP = obtenerClaseIP(ip);
        console.log(`CLASE: ${claseIP}`);
        console.log("---------------------");
        const mascaraSubred = obtenerMascaraSubred(claseIP);
        console.log(`Máscara: ${claseIP}: ${mascaraSubred}`);
        console.log("---------------------")
        
        const idRed = obtenerIDRed(ip, claseIP);
    
        console.log(`ID de la red: ${claseIP}: ${idRed}`);
        console.log("-----------------------")
    } else {
        console.error('La entrada proporcionada no es una dirección IP válida.');
        
console.log("")
console.log("")

    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("")
rl.question('Por favor, introduce una dirección IP: ', (input) => {
    main(input);
    rl.close();
});
