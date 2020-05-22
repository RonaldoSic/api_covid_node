const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const exampleData = require('../Data/example.json')
const mysqlConexion = require('../Data/conexionDB');

/*
INSERT INTO `personas19` (`id`, `nombres`, `apellidos`, `edad`, `genero`, `pais`, `departamento`, `municipio_ciudad`) VALUES (NULL, 'Maria Regina', 'Paz Reyes', '27', 'Femenino', 'Guatemala', 'Peten', 'San Benito Peten');
*/ 

router.get('/personas', (req, res) =>{
    res.json(exampleData)
})


router.get('/personas/:country', (req, res) =>{
    const {country} = req.params;
    console.log(country, ' Esto es tu parametro?');    
    mysqlConexion.query(`Select * from personas19 where pais = ${country}`, (err, rows, fields) =>{
        if(!err){
            res.json(rows)
        }else{
            res.json({'error': err})
        }
    });
});
router.post ('/personas',(req, res) => {
    const {nombres, apellidos, 
            edad, genero, pais,
            departamento, municipio_ciudad} = req.body;
    if (nombres && apellidos && edad && genero && pais && departamento && municipio_ciudad) {
        const id = exampleData.length +1;
        const person ={id,...req.body}
        console.log(person);
        exampleData.push(person);
        res.json(exampleData)
    }else{
        res.status(500).json({error: 'No es posible almacenra una persona ahora'});
    }
    
})
router.put('/personas/:id',(req, res) =>{
    const {id} = req.params;
    const {nombre, apellido, edad, sexo, pais, estado_depart, municipio_ciudad} = req.body;
    if (nombre && apellido && edad && sexo && pais && estado_depart && municipio_ciudad) {
        _.each(exampleData, (person, index) =>{
            if(person.id==id){
                person.nombre= nombre; 
                person.apellido= apellido;
                person.edad = edad;
                person.sexo = sexo;
                person.estado_depart= estado_depart;
                person.municipio_ciudad= municipio_ciudad;                
            }                            
        });
        res.json(exampleData);
    }else{
        res.status(500).json({error: 'I dont Recived your Data'});
    }
})
router.delete('/personas/:id',(req, res) =>{
    const  {id} = req.params;
    _.each(exampleData, (data, i ) =>{
        data.id==id?exampleData.splice(i, 1):console.log('Id not found');
    })
    res.send(exampleData)
})
module.exports = router;