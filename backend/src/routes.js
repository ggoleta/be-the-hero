const express  = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

/**
 * Rotas / Recursos
 *

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros enviados na rota (/users?name=Rogerio) após '?'
  *     acessamos através do query -> const params = req.query;
  * Route Params: Parâmetros para identificar recursos (um único recurso - /users/1)
  *     acessamos através do params -> 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Bancos de Dados
   * SQL: MySQL, SQLite, PostgreSQL, Oraccle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc...
   */

module.exports = routes;