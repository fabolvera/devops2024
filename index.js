//const express = require('express');

//const app = express();
//app.get('/', (req, res) => {
//  res.send('Hello new World 2');
//})
//module.exports = app;
// Importar el módulo os
const os = require('os');
 
// Obtener el nombre de la máquina
const hostname = os.hostname();
 
// Mostrar el nombre de la máquina
console.log('El nombre de la máquina es:', hostname);
