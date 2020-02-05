export function addToCartRequest(id) {
  return {
    type: "@cart/ADD_REQUEST",
    id
  };
}

export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESS",
    id
  };
}

export function removeFromCart(id) {
  return {
    type: "@cart/REMOVE",
    id: id
  };
}

export function updateAmount(id, amount) {  
  return {  
    type: "@cart/UPDATE_AMOUNT",
    id,
    amount
  }
}
