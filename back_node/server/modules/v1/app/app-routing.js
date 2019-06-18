'use strict';

/**
 * App Router
 *
 * @module
 * @author Marcelo Rusconi <mgrusconi@gmail.com>
 */

const Router = require('express');
const controller = require('./app-controller');

const router = new Router();

/**
 * @swagger
 * /app/github/{profile}/{type}:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Get Resources from Github
 *     description: Method that allows to obtain resources from github.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: profile
 *         in: path
 *         description: Github Profile
 *         required: true
 *         type: string
 *         default: symfony
 *       - name: type
 *         in: path
 *         description: Resource
 *         required: true
 *         type: string
 *         default: repos
 *     responses:
 *       200:
 *         description: app!
 *         schema:
 *           $ref: ''
 */

router.route('/github/:profile/:type').get((...args) => controller.getGithubResources(...args));

module.exports = router;