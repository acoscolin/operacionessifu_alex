// SCRIPT DE PRUEBA DE PERSISTENCIA
// Copia y pega esto en la consola del navegador (F12)

console.log('=== PRUEBA DE PERSISTENCIA ===');

// 1. Verificar estado actual
console.log('Estado actual:', state);

// 2. Agregar una nota de prueba
const testNote = {
    id: Date.now(),
    text: 'PRUEBA DE PERSISTENCIA - ' + new Date().toLocaleTimeString(),
    tag: 'TEST',
    date: new Date().toLocaleDateString('es-ES'),
    completed: false
};

state.notes.unshift(testNote);
console.log('✅ Nota de prueba agregada:', testNote);

// 3. Forzar guardado
forceSyncSave();
console.log('✅ Guardado forzado ejecutado');

// 4. Verificar en localStorage
const saved = localStorage.getItem('sifu_universal_state_v5');
if (saved) {
    const parsed = JSON.parse(saved);
    console.log('✅ Datos en localStorage:', parsed.notes.length, 'notas');
    console.log('✅ Primera nota:', parsed.notes[0]);
} else {
    console.error('❌ NO HAY DATOS EN LOCALSTORAGE');
}

console.log('\n🔄 Ahora cierra y vuelve a abrir el navegador');
console.log('La nota de prueba debe seguir ahí');
