const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((acc, item) => acc + item.price, 0).toFixed(2);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const currentPizzasAmount = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzasAmount,
          totalPrice: getTotalPrice(currentPizzasAmount),
        },
      };
      const allOneTypePizzas = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.call([], ...Object.values(allOneTypePizzas)),
        totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
      };

    case 'CLEAR_CART':
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      const newTotalPrice = (state.totalPrice - currentTotalPrice).toFixed(2)
      const newTotalCount = (state.totalCount - currentTotalCount)
      return {
        ...state,
        items: newItems,
        totalPrice: newTotalPrice,
        totalCount: newTotalCount,
      };
    }

    case 'MINUS_ITEM_CART': {
      const oldItems = state.items[action.payload].items;
      const newItemsMinus = oldItems.length > 1 ? oldItems.slice(0, -1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsMinus,
          totalPrice: getTotalPrice(newItemsMinus),
          totalCount: newItemsMinus.length,
        },
      };
      const allOneTypePizzas = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.call([], ...Object.values(allOneTypePizzas)),
        totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
        totalCount: allPizzas.length,
      };
    }

    case 'PLUS_ITEM_CART': {
      const newItemsPlus = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newItemsPlus,
          totalPrice: getTotalPrice(newItemsPlus),
          totalCount: newItemsPlus.length,
        },
      };

      const allOneTypePizzas = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.call([], ...Object.values(allOneTypePizzas)),
        totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
        totalCount: allPizzas.length,
      };
    }

    default:
      return state;
  }
};

export default cart;
