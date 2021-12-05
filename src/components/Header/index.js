import React from "react";
import logo from "../../assets/images/logo.svg";
import { Container, Cart } from "./styles";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { connect } from "react-redux";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <div>
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </div>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
