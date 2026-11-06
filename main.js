let gatti = 44;
let gattiinfila = 6;

let file = Math.floor(gatti / gattiinfila);
let avanzo = gatti % gattiinfila;
let mancanti = gattiinfila - avanzo;

console.log(`Ci sono ${file} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${avanzo}`);
