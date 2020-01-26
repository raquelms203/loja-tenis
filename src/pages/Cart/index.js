import React from "react";
import { Container, ProductTable, Total } from "./styles";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="

https://www.andaraki.com.br/1683-large_default/tenisskidgripcr00080004allstarpretopreto.jpg"
                alt="Tênis"
              ></img>
            </td>
            <td>
              Tênis
              <span>R$129,99</span>
            </td>
            <td>
              <div>
                {" "}
                <button type="button">
                  <MdRemoveCircleOutline
                    size={20}
                    color="#7159c1"
                  ></MdRemoveCircleOutline>
                </button>
                <input type="number" readOnly value={2}></input>
                <button type="button">
                  <MdAddCircleOutline
                    size={20}
                    color="#7159c1"
                  ></MdAddCircleOutline>
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1"></MdDelete>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
