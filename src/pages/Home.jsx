import React from 'react';
import { useSelector, useDispatch } from 'react-redux'


import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'


const categoryNames = ['мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые']
const sortList= [
  {name: 'популярности', type: 'popular'}, 
  {name: 'цене', type: 'price'}, 
  {name:'алфавиту', type: 'alphabet'},
]

function Home() {
  const dispatch = useDispatch()
  const state = useSelector(({ pizzasReducer }) => {
    return {
      items: pizzasReducer.items,
      isLoaded: pizzasReducer.isLoaded
    }
  })

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectCategory}
          items={categoryNames}
          pizzas={state.items}
        />
        <SortPopup sortList={sortList}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {state.isLoaded 
            && state.items.map(item => <PizzaBlock {...item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default Home;
