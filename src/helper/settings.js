const env = require('env-var');

const exceptForTests = process.env.NODE_ENV !== 'test';

module.exports = {
  port: env
    .get('PRODUCT_API_PORT')
    .required(exceptForTests)
    .asIntPositive(),

  logs: {
    level: env
      .get('PRODUCT_API_LOG')
      .required(exceptForTests)
      .asString(),
    send: env
      .get('PRODUCT_API_ENABLED_LOG')
      .required(exceptForTests)
      .asBool()
  },

  crypter: {
    secret: env
      .get('PRODUCT_API_CRYPTER_SECRET')
      .asString(),

    jwt: {
      jwtSecret: 'baseProjectSecret'
    }
  },

  swagger: {
    path: '/swagger/'
  },

  clients: {
    mongodb: {
      url: env.get('MONGO_QUERY_STRING').asString(),
      isEnabled: env.get('ENABLED_MONGODB').asBool()
    }
  }
};