// export const setTotalPrice = (price) => {
//     return {
//         type: 'SET_TOTAL_PRICE',
//         payload: price,
//     }
// }

// export const setTotalCount = (count) => {
//     return {
//         type: 'SET_TOTAL_PRICE',
//         payload: count,
//     }
// }

export const addPizzaToCart = (obj) => {
    return {
        type: 'ADD_PIZZA_TO_CART',
        payload: obj,
    }
}