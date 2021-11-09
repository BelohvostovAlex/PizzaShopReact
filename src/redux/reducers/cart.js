const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const newItems = {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id] 
                    ? [action.payload] 
                    : [
                        ...state.items[action.payload.id],
                        action.payload
                    ]
                };
                const allPizzas = [].concat.apply([],Object.values(newItems)),
                      totalPrice = allPizzas.reduce((acc,item) => acc + item.price, 0).toFixed(2)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }

            default:
                return state
    }
}

export default cart