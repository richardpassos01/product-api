const ProductFactory = require('../factories/product');

const productController = ProductFactory.creatreController();

exports.loadIn = function loadIn(
  router,
  controller = productController
) {
  router.get('/products',
    (...args) => controller.listProducts(...args));

  router.put('/products/:id',
    (...args) => controller.update(...args));

  router.delete('/products/:id',
    (...args) => controller.delete(...args));

  router.post('/products',
    (...args) => controller.create(...args));
};