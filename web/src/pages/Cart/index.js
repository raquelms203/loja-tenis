import React, { useState } from "react";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import { Container, ProductTable, Total, Subtotal } from "./styles";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import * as CartAction from "../../store/modules/cart/actions";
import { bindActionCreators } from "redux";
import { formatPrice } from "../../util/format";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

function Cart({ cart, removeFromCart, updateAmount, total }) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function increment(product) {
    updateAmount(product._id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product._id, product.amount - 1);
  }

  function resetCart() {
    setLoading(true);
    var flag = false;

    cart.forEach(async function (item) {
      removeFromCart(item._id);
      try {
        await api.post("/sale", {
          id: item._id,
          amount: item.amount,
        });
        setLoading(false);
        toast.success(`Sucesso ao comprar ${item.title}`);
        setTimeout(() => {
          history.push("/");
        }, 4000);
      } catch (e) {
        toast.error(`Ocorreu um erro ao comprar ${item.title}`);
      }
    });
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product._id}>
              <td>
                <img src={product.image} alt={product.title}></img>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                    ></MdRemoveCircleOutline>
                  </button>
                  <input type="number" readOnly value={product.amount}></input>
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                    ></MdAddCircleOutline>
                  </button>
                </div>
              </td>
              <Subtotal>
                <strong>{product.subtotal}</strong>
              </Subtotal>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product._id)}
                >
                  <MdDelete size={20} color="#7159c1"></MdDelete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        {loading ? (
          <Grid container justify="center">
            {" "}
            <CircularProgress />
          </Grid>
        ) : (
          <button type="button" onClick={resetCart}>
            Finalizar pedido
          </button>
        )}
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
        <ToastContainer
          position="bottom-right"
          closeButton={false}
          theme="colored"
        />
      </footer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartAction, dispatch);

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
