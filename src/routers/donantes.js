const { Router } = require('express');
const router = Router();
const mysqlConexion = require('../Data/conexionDB');
router.get('/donar', (req, res) => {   
    mysqlConexion.query(`SELECT * FROM donaciones`, (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows)
        } else {
            res.status(500).json({
                "Staus": "list People no found"
            })
        }
    });
});

router.post('/donar', (req, res) => {
    const {
        nombre,
        apellido,
        edad,
        direccion,
        donacion_tipo,
        estado_civil, 
        genero
    } = req.body;
    const query = `
        INSERT INTO donaciones (nombre,apellido,edad,direccion,donacion_tipo,estado_civil, genero) 
        VALUES (?,?,?,?,?,?,?)`;
    if (nombre && apellido && edad && genero && direccion && donacion_tipo && estado_civil) {
        mysqlConexion.query(query, [nombre,apellido,edad,direccion,donacion_tipo, estado_civil,genero], (err, rows, fields) => {
            if (!err) {
                res.status(200).json({
                    "Staus": "Donacion Guardada"
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

module.exports = router;
