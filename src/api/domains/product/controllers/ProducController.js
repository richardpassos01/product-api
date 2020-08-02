const {
  OK
} = require('http-status-codes');
const logger = require('../../../../helper/logger');

class ProductController {
  constructor(params) {
    this.service = params.service;
  }

  listProducts(req, res) {
    const {
      id
    } = req.query;

    return this.service.listProducts({
        id
      })
      .then((products) => res.status(OK).json(products))
      .catch((err) => logger.error(err));
  }

  update(req, res) {
    const {
      body: {
        name,
        price,
        description,
        cover
      },
      params: {
        id
      }
    } = req;

    return this.service.update({
        id,
        name,
        price,
        description,
        cover
      })
      .then((product) => res.status(OK).json(product))
      .catch((err) => logger.error(err));
  }

  delete(req, res) {
    const {
      id
    } = req.params;

    return this.service.delete({
        id
      })
      .then((product) => res.status(OK).json(product))
      .catch((err) => logger.error(err));
  }

  create(req, res) {
    const {
      name,
      price,
      description,
      cover
    } = req.body;

    return this.service.create({
        name,
        price,
        description,
        cover
      })
      .then((product) => res.status(OK).json(product))
      .catch((err) => logger.error(err));
  }
}

module.exports = ProductController;