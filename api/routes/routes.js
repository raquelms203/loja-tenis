let Router = require("express").Router();
var productController = require("../controller/productController");

Router.get("/", function (req, res) {
  res.json({
    status: "WORKING",
    message: "/api route",
  });
});

Router.route("/products")
  .get(productController.index)
  .post(productController.new);

Router.route("/product/:product_id")
  .get(productController.view)
  .put(productController.update)
  .delete(productController.delete);

Router.route("/sale").post(productController.sale);

module.exports = Router;
