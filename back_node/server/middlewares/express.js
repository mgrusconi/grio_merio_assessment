'use strict';

/**
 * Modulo que contiene la implementacion de Express.
 * Module containing the Express implementation.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

const express = require('express');
const swaggerConfig = require('./swagger');
const swaggerUi = require('swagger-ui-express');
const routings = require('../modules/v1/app/app-routing');
const bodyParser = require('body-parser');
const cors = require('cors');


function expressApp() {
    
  // App
  const app = express();

  // Cors
  app.use(cors());

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  
  //Routing
  app.use('/app/', routings);

  // Swagger
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  return app;
}

module.exports = expressApp();