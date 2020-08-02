class ProductRepository {
  constructor(params = {}) {
    this.mongo = params.mongo;
  }

  async listProducts({
    id = null
  } = {}) {
    const {
      Product
    } = await this.mongo.models();
    const findAll = id ? {
      _id: id
    } : null;

    return Product.find(findAll).sort('-createdAt');
  }

  async update({
    id,
    ...data
  }) {
    const {
      Product
    } = await this.mongo.models();

    return Product.updateOne({
      _id: id
    }, {
      ...data
    });
  }

  async delete({
    id
  }) {
    const {
      Product
    } = await this.mongo.models();

    return Product.deleteOne({
      _id: id
    });
  }

  async create({
    name,
    price,
    description,
    cover
  }) {
    const {
      Product
    } = await this.mongo.models();

    return Product.create({
      name,
      price,
      description,
      cover
    });
  }
}


module.exports = ProductRepository;