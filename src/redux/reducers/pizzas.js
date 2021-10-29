const intitialState = {
    items: [],
    isLoaded: false 
}

const pizzas = (state = intitialState, action) => {
    if(action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
        }
    }

    return state
}

export default pizzas