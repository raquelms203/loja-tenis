import React from "react";
import logo from "../../assets/images/logo.svg";
import { Container, Cart } from "./styles";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
export default function index() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
      </Cart>
      <MdShoppingBasket size={36} color="#FFF" />
    </Container>
  );
}
