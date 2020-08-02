exports.loadIn = function loadIn(database) {
  const productSchema = new database.Schema({
    name: String,
    price: Number,
    description: String,
    cover: String
  }, {
    timestamps: true
  });

  database.model('Product', productSchema);
};