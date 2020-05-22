const {
    Router
} = require('express');
const router = Router();
const _ = require('underscore');
const exampleData = require('../Data/example.json')
const mysqlConexion = require('../Data/conexionDB');

// SELECT * from personas19 WHERE departamento like '%C%'
// SELECT * FROM personas19 where municipio_ciudad like '%to%'
// SELECT * FROM personas19 where genero = 'Masculino'
// Select * from personas19 where pais = 'Guatemala'}
let consultas = [
    `SELECT * from personas19 WHERE departamento like '%?%'`,
    `SELECT * FROM personas19 where municipio_ciudad like '%?%'`,
    `SELECT * FROM personas19 where genero = '?'`,
    `Select * from personas19 where pais = '?'`
]
// 
router.get('/personas', (req, res) => {
    // res.json(exampleData)
    mysqlConexion.query(`SELECT * FROM personas19`, (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows)
        } else {
            res.status(500).json({
                "Staus": "People Saved"
            })
        }
    });
})
router.get('/personas/:country', (req, res) => {
    console.log('El Body de get', req.body);
    const {
        country
    } = req.params;
    console.log(country, ' Esto es tu parametro?');
    mysqlConexion.query(`Select * from personas19 where pais = ${country}`, (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            res.json({
                'error': err
            })
        }
    });
});
// 
router.patch('/personas', (req, res) => {
    const {
        buscarEsto,
        edadMax,
        edadMin,
        opcionNum
    } = req.body;
    if (buscarEsto != '') {
        console.log('Esto es lo que hay que buscar',buscarEsto)
        switch (opcionNum) {
            case 1:
                mysqlConexion.query(`Select * from personas19 where pais = ${buscarEsto}`, (err, rows, fields) => {
                    if (!err) {
                        res.status(200).json(rows)
                    } else {
                        res.status(500).json({
                            "Staus": "no se puede con la busqueda"
                        })
                    }
                });
                break;
            case 2:
                console.log("Buscar por Departamento")
                break;
            case 3:
                console.log("Buscar por Municipio")
                break;
            case 4:
                console.log("Buscar por Genero")
                break;
            case 5:
                console.log("Buscar por rango de edades")
                break;
            default:
                break;
        }
    } else {
        res.status(400).json({
            "error": "Su perticion no es la correcta"
        });
    }
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