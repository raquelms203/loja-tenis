import React, { Component } from "react";
import api from "../../services/api";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";
import { connect } from "react-redux";
import * as CartAction from "../../store/modules/cart/actions";
import { bindActionCreators } from "redux";

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.data.map((item) => ({
      ...item,
      priceFormated: formatPrice(item.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { amount } = this.props;
    const { products } = this.state;
    return (
      <ProductList>
        {products.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title}></img>
            <strong>{item.title}</strong>
            <span>{item.priceFormated}</span>
            <button type="button" onClick={() => this.handleAddProduct(item)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF"></MdAddShoppingCart>
                {"  "}
                {amount[item._id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product._id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
