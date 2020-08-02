const Controller = require('../controllers/ProducController');
const Service = require('../services/ProductService');
const Repository = require('../repositories/ProductRepository');

const Mongo = require('../../../../database/models/mongodb');

let mongo;

class ProductFactory {
  creatreController(params = {}) {
    const service = params.service || this.createService();

    return new Controller({
      service
    });
  }

  createService(params = {}) {
    const repository = params.repository || this.createRepository();

    return new Service({
      repository
    });
  }

  createRepository() {
    mongo = mongo || new Mongo();

    return new Repository({
      mongo
    });
  }
}

module.exports = new ProductFactory();