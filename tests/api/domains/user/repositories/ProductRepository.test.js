const ProductRepository = require('../../../../../src/api/domains/product/repositories/ProductRepository');
const {
  defaultResult
} = require('../../../../mocks/express');

let repository;
let mongo;
let mockResult;

describe('#BeneficiaryRepository', () => {
  beforeAll(() => {
    mockResult = [defaultResult];

    params = {
      name: 'richard'
    };
  });

  beforeEach(() => {
    const modelProduct = {
      find: jest.fn().mockReturnValueOnce({
        sort: jest.fn().mockReturnValueOnce(mockResult)
      }),
      findAll: jest.fn().mockResolvedValue(mockResult),
      create: jest.fn().mockResolvedValue(defaultResult)
    };

    const create = jest.fn().mockResolvedValue(defaultResult);

    mongo = {
      models: jest.fn().mockResolvedValue({
        Product: modelProduct,
        mongoProjectModel: modelProduct
      })
    };

    repository = new ProductRepository({
      mongo
    });
  });

  describe('#constructor', () => {
    it('Should construct repository without params', async () => {
      repository = new ProductRepository();
    });
  });
});