export function addToCart(product) {
  return {
    type: "@cart/ADD",
    product,
  };
}

export function removeFromCart(_id) {
  return {
    type: "@cart/REMOVE",
    _id: _id,
  };
}

export function updateAmount(_id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT",
    _id: _id,
    amount,
  };
}
