import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector } from 'react-redux'

function Home() {

  const state = useSelector(({pizzasReducer}) => {
    return {
      items: pizzasReducer.items,
    }
  }) 
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(item) => alert(item)}
          items={['мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые']}
        />
        <SortPopup sortList={[
          {name: 'популярности', type: 'popular'}, 
          {name: 'цене', type: 'price'}, 
          {name:'алфавиту', type: 'alphabet'}]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {state.items && state.items.map(item => <PizzaBlock {...item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default Home;
