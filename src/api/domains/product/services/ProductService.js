const logger = require('../../../../helper/logger');

const sanitizeProducts = (products) => products.map(({
  _id,
  name,
  price,
  description,
  cover
}) => {
  return {
    id: _id,
    productName: name,
    productPrice: price,
    productDescription: description,
    productCover: cover
  }
});

class ProductService {
  constructor(params = {}) {
    this.repository = params.repository;
  }

  async listProducts({
    id = null
  } = {}) {
    try {
      const productList = await this.repository.listProducts({
        id
      });

      return sanitizeProducts(productList);
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

  async delete({
    id
  }) {
    try {
      return this.repository.delete({
        id
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