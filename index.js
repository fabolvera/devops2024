const express = require('express');
// Importar el módulo os
const os = require('os');
// Obtener el nombre de la máquina
const hostname = os.hostname();

const app = express();
app.get('/', (req, res) => {
 res.send('Hello World ⭐');
})
module.exports = app;

 
// Mostrar el nombre de la máquina
//console.log('El nombre de la máquina es:', hostname);
