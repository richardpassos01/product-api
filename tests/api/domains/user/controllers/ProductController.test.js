const {
  OK
} = require('http-status-codes');
const ProductController = require('../../../../../src/api/domains/product/controllers/ProducController');
const {
  mockResponse,
  mockRequest,
  defaultResult
} = require('../../../../mocks/express');

let controller;
let service;
let res;
let req;
let result;

describe('#ProductController', () => {
  beforeAll(() => {
    req = mockRequest({
      name: 'richard'
    }, {
      productId: '123'
    });
    res = mockResponse();
    result = [defaultResult];
  });

  beforeEach(() => {
    service = {
      listProducts: jest.fn().mockResolvedValue(result),
      create: jest.fn().mockResolvedValue(result)
    };

    controller = new ProductController({
      service
    });
  });

  describe('#manipulate product table', () => {
    it('Should call listProducts service functions', async () => {
      await controller.listProducts(req, res);

      expect(service.listProducts).toHaveBeenCalledTimes(1);
      expect(service.listProducts).toHaveBeenCalledWith({
        productId: '123'
      });

      expect(res.status).toHaveBeenCalledWith(OK);
      expect(res.json).toHaveBeenCalledWith(result);
    });

    it('Should call create service functions', async () => {
      await controller.create(req, res);

      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith({
        name: 'richard'
      });

      expect(res.status).toHaveBeenCalledWith(OK);
      expect(res.json).toHaveBeenCalledWith(result);
    });
  });
});