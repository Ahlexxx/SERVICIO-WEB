const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/login', (req, res) => {
    const datos = req.query;
    console.log('Datos de inicio de sesión:', datos);
    res.send('inicio de sesión');
});


app.get('/validar', (req, res) => {
    res.send('Validación exitosa');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
