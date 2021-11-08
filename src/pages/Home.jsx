import React from 'react';
import { useSelector, useDispatch } from 'react-redux'


import { Categories, SortPopup, PizzaBlock } from '../components';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock' 

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'


const categoryNames = ['мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые']
const sortList= [
  {name: 'популярности', type: 'popular', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name:'алфавиту', type: 'name', order: 'asc'},
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
    dispatch(fetchPizzas(sortBy,category))
  }, [sortBy, category])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onClickSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type))
  })
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup 
          sortList={sortList}
          activeSortBy={sortBy.type}
          onClickSortBy={onClickSortBy}/>
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
