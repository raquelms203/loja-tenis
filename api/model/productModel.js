var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  price: {
    require: true,
    type: Number,
  },
  amount: {
    require: true,
    type: Number,
  },
  title: {
    require: true,
    type: String,
  },
  image: {
    require: true,
    type: String,
  },
});

var Product = (module.exports = mongoose.model("product", productSchema));

module.exports.get = function (callback, limit) {
  Product.find(callback).limit(limit);
};
