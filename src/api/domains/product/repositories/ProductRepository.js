class ProductRepository {
  constructor(params = {}) {
    this.mongo = params.mongo;
  }

  async listProducts({
    productId = null
  } = {}) {
    const {
      Product
    } = await this.mongo.models();
    const findAll = productId ? {
      _id: productId
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