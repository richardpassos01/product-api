const ProductService = require('../../../../../src/api/domains/product/services/ProductService');
const {
  defaultResult
} = require('../../../../mocks/express');

let service;
let repository;
let params;
let result;

describe('#ProductService', () => {
  beforeAll(() => {
    result = [defaultResult];

    params = {
      name: 'richard'
    };
  });

  beforeEach(() => {
    repository = {
      listProducts: jest.fn().mockResolvedValue(result),
      create: jest.fn().mockResolvedValue(defaultResult)
    };
    service = new ProductService({
      repository
    });
  });

  describe('#listProducts', () => {
    it('Should construct service without params', async () => {
      service = new ProductService();
    });
  });
});