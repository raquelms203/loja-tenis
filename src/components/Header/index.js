import React from 'react'
import logo from '../../assets/images/logo.svg';
import { Container } from './styles';
import { Link } from 'react-router-dom';
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
    </Container>
  )
}
