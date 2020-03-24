const express = require('express');

const OngController = require('./controllers/OngController.js');
const IncidentController = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfiileController.js');
const SessionController = require('./controllers/SessionController.js');

const routes = express.Router();

//  Métodos HTTP
//  GET: Buscar um dado no backend
//  POST: Cria um dado no backend
//  PUT: Altera um dado no backend
//  DELETE: Apaga um dado no backend
 
// Paramentros
// Query params: Parametros nomeados enviados na rota após o "?" (filtros, paginação, etc)
// Route params: Parametros utilizados para identificar recursos. 
// Request body: É o corpo da requisição. Utilizado para criar ou alterar recursos.

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;