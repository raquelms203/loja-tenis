Product = require("../model/productModel");

exports.index = function (req, res) {
  Product.get(function (err, products) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    else
      res.json({
        status: "success",
        message: "ok",
        data: products,
      });
  });
};

exports.new = function (req, res) {
  var product = new Product();
  product.title = req.body.title;
  product.price = req.body.price;
  product.image = req.body.image;
  product.amount = req.body.amount;

  product.save(function (err) {
    if (err) res.json(err);
    else
      res.json({
        message: "ok",
        data: product,
      });
  });
};

exports.view = function (req, res) {
  Product.findById(req.params.product_id, function (err, product) {
    if (err) res.send(err);
    else
      res.json({
        message: "1 product found",
        data: product,
      });
  });
};

exports.update = function (req, res) {
  Product.findById(req.params.product_id, function (err, product) {
    if (err) res.send(err);
    else {
      product.title = req.body.title ? req.body.title : product.title;
      product.amount = req.body.amount ? req.body.amount : product.amount;
      product.image = req.body.image ? req.body.image : product.image;
      product.price = req.body.price ? req.body.price : product.price;

      product.save(function (err) {
        if (err) res.json(err);
        else res.json({ message: "ok", data: product });
      });
    }
  });
};

exports.sale = function (req, res) {
  let flag = false;
  Product.findById(req.body.id, function (err, product) {
    if (err) res.send(err);
    else {
      let newAmount = product.amount - req.body.amount;
      if (newAmount < 0) {
        res.statusCode = 400;
        res.send({
          status: "error",
          message: `Sem produtos em estoque do ${product.title}`,
        });
      } else if (newAmount == 0) {
        product.delete(function (err) {
          product.amount = newAmount;
          if (err) res.json(err);
          else
            res.json({
              status: "Compra realizada com sucesso",
              message: "Produto removido do estoque",
            });
        });
      } else {
        product.amount = newAmount;
        product.save(function (err) {
          if (err) res.json(err);
          else
            res.json({ status: "Compra realizada com sucesso", data: product });
        });
      }
    }
  });
};

exports.delete = function (req, res) {
  Product.deleteOne(
    {
      _id: req.params.product_id,
    },
    function (err, product) {
      if (err) res.send(err);
      else res.json({ status: "ok", message: "product deleted" });
    }
  );
};
