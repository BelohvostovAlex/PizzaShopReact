import axios from 'axios';

export const setLoaded = payload => {
    return {
        type: 'SET_LOADED',
        payload
    }
}

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/pizzas').then(({data}) => dispatch(setPizzas(data))
    )
}
 
export function setPizzas(items) {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    }
}
