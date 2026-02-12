
const fs = require('fs');
const path = 'c:/Users/acoscolin/OneDrive - GRUPO SIFU INTEGRACION LABORAL SL/Escritorio/INFORMER SIFU/master_data.js';

try {
    const data = fs.readFileSync(path, 'utf8');
    // Simple regex to count "ESTADO":"DESCUBIERTO" or similar
    // The file format is JSON-like inside a variable declaration
    const matches = data.match(/"ESTADO"\s*:\s*"[^"]*DESCUBIERTO[^"]*"/gi);
    console.log("Total explicit DESCUBIERTO matches:", matches ? matches.length : 0);

    // Also check for empty TITULAR which might count as uncovered in app logic logic
    // (titularUpper === 'SIN TITULAR') etc
    // This is harder to grep, but let's check explicit "DESCUBIERTO"
} catch (err) {
    console.error(err);
}
