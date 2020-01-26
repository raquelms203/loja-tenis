import React, { Component } from "react";
import api from "../../services/api";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";

export default class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map(item => ({  
      ...item,
      priceFormated: formatPrice(item.price)
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title}></img>
            <strong>Tênis muito legal</strong>
            <span>{item.priceFormated}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF"></MdAddShoppingCart>
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
