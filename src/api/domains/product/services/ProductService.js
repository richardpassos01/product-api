const logger = require('../../../../helper/logger');

class ProductService {
  constructor(params = {}) {
    this.repository = params.repository;
  }

  async listProducts({
    productId = null
  } = {}) {
    try {
      return this.repository.listProducts({
        productId
      });

    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async update({
    id,
    name = null,
    price = null,
    description = null,
    cover = null
  }) {
    try {
      if (!id) {
        throw {
          message: 'missing parameter'
        };
      }

      const paramsToUpdate = {
        name,
        price,
        description,
        cover
      }

      Object.keys(paramsToUpdate).forEach(key => {
        const value = !!paramsToUpdate[key];
        if (!value) {
          delete paramsToUpdate[key];
        }
      });

      return this.repository.update({
        id,
        ...paramsToUpdate
      });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async create({
    name,
    price,
    description,
    cover
  }) {
    try {
      return this.repository.create({
        name,
        price,
        description,
        cover
      });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

module.exports = ProductService;