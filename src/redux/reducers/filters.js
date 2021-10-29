const intitialState = {
    sortBy: 'popular',
    category: 0
}

const filters = (state = intitialState, action) => {
    if(action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }

    if(action.type === 'SET_CATEGORY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }

    return state
}




export default filters