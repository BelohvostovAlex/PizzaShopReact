export const addPizzaToCart = (obj) => {
    return {
        type: 'ADD_PIZZA_TO_CART',
        payload: obj,
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    }
}

export const removeCartItem = (id) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: id,
    }
}