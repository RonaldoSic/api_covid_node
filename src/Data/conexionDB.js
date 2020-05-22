const mysql = require('mysql');
const mysqlConexion = mysql.createConnection({
    host: 'db4free.net',
    port:'3306',
    user:'ronaldosic',
    password:'Datos1879',
    database:'umgcovid19'
});

mysqlConexion.connect((err)=>{
    err?console.log(err):console.log('Data Base is connected')    
});
module.exports = mysqlConexion;