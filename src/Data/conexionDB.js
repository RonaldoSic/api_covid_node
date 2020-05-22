const mysql = require('mysql');
const mysqlConexion = mysql.createConnection({
    host: '127.0.0.1',
    port:'3307',
    user:'Ronaldo',
    password:'Datos18',
    database:'covid19'
});

mysqlConexion.connect((err)=>{
    err?console.log(err):console.log('Data Base is connected')    
});
module.exports = mysqlConexion;