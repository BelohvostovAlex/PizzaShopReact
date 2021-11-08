const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state
            }
        }
    }
}