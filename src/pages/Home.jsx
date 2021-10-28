import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({Items}) {
  console.log(Items)
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(item) => alert(item)}
          items={['мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые']}
        />
        <SortPopup sortList={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {Items.map(item => <PizzaBlock item={item}/>)}
      </div>
    </div>
  );
}

export default Home;
