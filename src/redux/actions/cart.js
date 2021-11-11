export const addPizzaToCart = (obj) => {
  return {
    type: 'ADD_PIZZA_TO_CART',
    payload: obj,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

export const removeCartItem = (id) => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: id,
  };
};

export const minusItem = (id) => {
  return {
    type: 'MINUS_ITEM_CART',
    payload: id,
  };
};

export const plusItem = (id) => {
  return {
    type: 'PLUS_ITEM_CART',
    payload: id,
  };
};
