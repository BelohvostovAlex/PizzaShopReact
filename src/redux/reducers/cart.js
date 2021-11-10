const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => {
    return arr.reduce((acc,item) => acc+item.price,0).toFixed(2)
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const currentPizzasAmount = !state.items[action.payload.id] 
            ? [action.payload] 
            : [
                ...state.items[action.payload.id].items,
                action.payload
            ]
            const newItems = {
                    ...state.items,
                    [action.payload.id]: {
                        items: currentPizzasAmount,
                        totalPrice: getTotalPrice(currentPizzasAmount)
                    }
                };
                const allOneTypePizzas = Object.values(newItems).map(obj=> obj.items)
                const allPizzas = [].concat.call([],...Object.values(allOneTypePizzas)),
                      totalPrice = getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }

            case 'CLEAR_CART':
                return  {
                    items: {},
                    totalCount: 0,
                    totalPrice: 0
                }

            case 'REMOVE_CART_ITEM': {
                const newItems = {
                    ...state.items
                }
                const currentTotalPrice = newItems[action.payload].totalPrice
                const currentTotalCount = newItems[action.payload].items.length
                delete newItems[action.payload]
                return {
                    ...state,
                    items: newItems,
                    totalPrice: state.totalPrice - currentTotalPrice,
                    totalCount: state.totalCount - currentTotalCount
                    
                }
            }

            default:
                return state
    }
}

export default cart