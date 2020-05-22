const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;
const apiDirect = '/api';
// +++SETTING CROSS+++
const host = process.env.HOST || '0.0.0.0'; //escuchando desde un host especifico

// +++ SETTING +++
app.set('port', process.env.PORT || port);
app.set('json spaces', 2);
// +++ MIDDLEWARES +++
// ENCABEZADOS PARA SOLUCIONAR LOS PROBLEMAS DE CORS
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
})
// app.use(express.json()); //Esto es similar a usar el framework de bodyParser pero sin instalarlo que ya lo trae express
app.use(morgan('dev')); // RECONOCIMIENTO PARA CONOCER LAS PETICIONES DEL CLIENTE
app.use(express.urlencoded({extended: false})); //para entender los datos de formulario, sin IMG
app.use(express.json()); // esto para que retore formatos json

// +++ ROUTERS +++
app.use(require('./routers/index'));
app.use(apiDirect,require('./routers/personas'));
// Rura para consumit otra REST API
app.use(apiDirect,require('./routers/userByOtherApi'));

// +++ STARTING SERVER +++
app.listen(app.get('port'), () => console.log(`Example app listening on port port!`));