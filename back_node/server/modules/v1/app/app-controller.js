'use strict';


/**
 * AppController
 *
 * NodeJS version ES6
 * @category Assessment
 * 
 * @module
 * @author   Marcelo Rusconi <mgrusconi@gmail.com>
 *
 */


const Promise = require('bluebird');
const config = require('../../../config/');

const request = Promise.promisifyAll(require('request'));

class AppController {

  /**
   * Método que permite obtener recursos de github mediante su API.
   * Method that allows you to obtain github resources using its API.
   *
   * @param \ req, res, next
   * @return \Json
   */
  getGithubResources(req, res, next) {
    request.getAsync({
      url: `${config.resources.github}/${req.params.profile}/${req.params.type}`,
      method: 'GET',
      headers: {
        'User-Agent': req.params.profile
      }
    }).then((doc) => {
      let rs;
      let code;
      if (doc.statusCode === 200) {
        rs = this._processData(JSON.parse(doc.body), req.params.type);
        code = rs.code;
      } else {
        rs = { 'message': doc.body };
        code = doc.statusCode;
      }
      return res.status(code).json(rs.body);
    }).catch(err => next(err));
  }

  _processData(data, type) {
    switch (type) {
      case 'repos':
        return {
          code: 200,
          body: this._processRepos(data)
        };
        break;

      case 'events':
      case 'hooks':
      case 'issues':
      case 'members':
        return {
          code: 501,
          body: { 'message': 'To Do Implementation' }
        };
        break

      default:
        return {
          code: 404,
          body: { 'message': 'Unknown method' }
        };
        break;
    }
  }

  _processRepos(data) {
    return data.map(repo => {
      return {
        avatar: repo.owner.avatar_url,
        owner: repo.owner.login,
        full_name: repo.full_name,
        forks: repo.forks_count,
        open_issues: repo.open_issues_count,
        stargazers: repo.stargazers_count
      }
    });
  }

}

module.exports = new AppController;