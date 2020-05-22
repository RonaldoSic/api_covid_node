const {
    Router
} = require('express');
const router = Router();
const _ = require('underscore');
const exampleData = require('../Data/example.json')
const mysqlConexion = require('../Data/conexionDB');
// METODOS PARA LAS CONSULTAS
router.get('/personas', (req, res) => {
    // res.json(exampleData)
    mysqlConexion.query(`SELECT * FROM personas19`, (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows)
        } else {
            res.status(500).json({
                "Staus": "list People no found"
            })
        }
    });
})
router.patch('/personas', (req, res) => {
    const {
        buscarEsto,
        edadMax,
        edadMin,
        opcionNum
    } = req.body;
    let resultado = [];
    
        console.log('Esto es lo que hay que buscar',buscarEsto)
        switch (opcionNum) {
            case 1:
                if(buscarEsto !=''){
                    mysqlConexion.query(`Select * from personas19 where pais = '${buscarEsto}'`,    (err, rows, fields) => {
                        if (!err) {
                            console.log(rows)
                            res.json(rows)
                        } else {
                            res.status(500).json({'Error':'Interno'});
                        }
                    });
                }
                break;
            case 2:
                console.log("Buscar por Departamento")   
                if(buscarEsto !=''){             
                    mysqlConexion.query(`SELECT * FROM personas19 where departamento like '%${buscarEsto}%'`, (err, rows, fields) => {
                        if (!err) {
                            console.log(rows)
                            res.json(rows)
                        } else {
                            res.status(500).json({'Error':'Interno'});
                        }
                    });
                }
                break;
            case 3:
                console.log("Buscar por Municipio")
                if(buscarEsto !=''){
                    mysqlConexion.query(`SELECT * FROM personas19 where municipio_ciudad like '%${buscarEsto}%'`, (err, rows, fields) => {
                        if (!err) {
                            console.log(rows)
                            res.json(rows)
                        } else {
                            res.status(500).json({'Error':'Interno'});
                        }
                    });
                }
                break;
            case 4:
                console.log("Buscar por Genero")
                if(buscarEsto !=''){
                    mysqlConexion.query(`SELECT * FROM personas19 where genero like '%${buscarEsto}%'`, (err, rows, fields) => {
                        if (!err) {
                            console.log(rows)
                            res.json(rows)
                        } else {
                            res.status(500).json({'Error':'Interno'});
                        }
                    });
                }
                break;                
            case 5:
                if(edadMax != 0 && edadMin != 0){
                    console.log("Buscar por rango de edades")                
                    mysqlConexion.query(`select * from personas19 WHERE edad BETWEEN ${edadMin} and ${edadMax}`, (err, rows, fields) => {
                        if (!err) {
                            console.log(rows)
                            res.json(rows)
                        } else {
                            res.status(500).json({'Error':'Interno'});
                        }
                    });
                }
                break;
            default:
                console.log('No empata La opcion')
                break;
        }
        // if(resultado.length != 0 ){
        //     res.json(resultado);
        // }else {
        // res.status(400).json({
        //     "error": "Su perticion no es la correcta"
        // });
        // }
})
router.post('/personas', (req, res) => {
    const {
        nombres,
        apellidos,
        edad,
        genero,
        pais,
        departamento,
        municipio_ciudad
    } = req.body;
    const query = `
        INSERT INTO personas19 (nombres,apellidos,edad,genero,pais,departamento,municipio_ciudad) 
        VALUES (?,?,?,?,?,?,?)`;
    if (nombres && apellidos && edad && genero && pais && departamento && municipio_ciudad) {
        mysqlConexion.query(query, [nombres, apellidos, edad, genero, pais, departamento, municipio_ciudad], (err, rows, fields) => {
            if (!err) {
                res.status(200).json({
                    "Staus": "People Saved"
                })
            } else {
                res.status(500).json({
                    'Error Insert': err
                })
            }
        });
    } else {
        res.status(500).json({
            error: 'Los datos Enviados no concuedan, revisa que esten todos los datos'
        });
    }
})

// Esto es para un archivo ya cargano no funciona para la api
router.put('/personas/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        nombre,
        apellido,
        edad,
        sexo,
        pais,
        estado_depart,
        municipio_ciudad
    } = req.body;
    if (nombre && apellido && edad && sexo && pais && estado_depart && municipio_ciudad) {
        _.each(exampleData, (person, index) => {
            if (person.id == id) {
                person.nombre = nombre;
                person.apellido = apellido;
                person.edad = edad;
                person.sexo = sexo;
                person.estado_depart = estado_depart;
                person.municipio_ciudad = municipio_ciudad;
            }
        });
        res.json(exampleData);
    } else {
        res.status(500).json({
            error: 'I dont Recived your Data'
        });
    }
})
router.delete('/personas/:id', (req, res) => {
    const {
        id
    } = req.params;
    _.each(exampleData, (data, i) => {
        data.id == id ? exampleData.splice(i, 1) : console.log('Id not found');
    })
    res.send(exampleData)
})

module.exports = router;