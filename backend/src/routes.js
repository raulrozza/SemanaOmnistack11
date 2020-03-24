const express = require('express')
const routes = express.Router();

const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const OngController = require('./controllers/OngController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.destroy);

module.exports = routes;