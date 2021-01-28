const { response } = require('express');
const express = require('express');
const router = express.Router();

var mysqlConnection = require('../database');


router.post('/auth', function(request, response) {
    var clave = request.body.clave;
    var usuario = request.body.usuario;
    if (usuario && clave) {
        mysqlConnection.query("SELECT * FROM user WHERE usuario = ? AND clave = ? ", [usuario, clave], (error, results, fields) => {
            if (results.length > 0) {
                // request.session.loggedin = true;
                // request.session.usuario = usuario;
                response.send(results)
            } else {
                response.send('usuario o clave incorrecta')
            }
            response.end();
        });
    } else {
        response.send('verifica he intente nuevamante')
        response.end();
    }
})









module.exports = router;