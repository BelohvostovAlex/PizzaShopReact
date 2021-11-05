import React from 'react';
import { useSelector, useDispatch } from 'react-redux'


import { Categories, SortPopup, PizzaBlock } from '../components';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock' 

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
  const pizzasState = useSelector(({ pizzasReducer }) => {
    return {
      items: pizzasReducer.items,
      isLoaded: pizzasReducer.isLoaded
    }
  })
  const { sortBy, category } = useSelector(({ filterReducer }) => filterReducer)

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [category, sortBy])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectCategory}
          items={categoryNames}
          pizzas={pizzasState.items}
        />
        <SortPopup sortList={sortList}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {pizzasState.isLoaded 
        ? pizzasState.items.map(item => <PizzaBlock {...item} key={item.id}/>) 
        : Array(10).fill('pizza').map((item,index) => item = <PizzaLoadingBlock key={index}/>)}
      </div>
    </div>
  );
}

export default Home;
