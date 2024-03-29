import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Button from "../Button";

function PizzaBlock({
  id,
  name,
  descr,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const [typeState, setTypeState] = React.useState(types[0]);
  const [sizeState, setSizeState] = React.useState(0);

  function activeTypeState(i) {
    setTypeState(i);
  }

  function activateSize(i) {
    setSizeState(i);
  }

  function handleAddPizza() {
    const obj = {
      id,
      name,
      descr,
      imageUrl,
      price,
      size: availableSizes[sizeState],
      type: availableTypes[typeState],
    };
    onClickAddPizza(obj);
  }

  return (
    <div className="pizza-block">
      <div className="pizza-block__topTogether">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <p className="pizza-block__descr">{descr}</p>
      </div>
      <div className="pizza-block__bottomTogether">
        <div className="pizza-block__selector">
          <ul>
            {availableTypes.map((type, index) => (
              <li
                className={classNames({
                  active: typeState === index,
                  disabled: !types.includes(index),
                })}
                onClick={() => activeTypeState(index)}
                key={`${index}_${type}`}
              >
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {availableSizes.map((size, index) => (
              <li
                onClick={() => activateSize(index)}
                className={classNames({
                  active: sizeState === index,
                  disabled: !sizes.includes(size),
                })}
                key={size}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} BYN</div>
          <Button className="button--add" outline onClick={handleAddPizza}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount && <i>{addedCount}</i>}
          </Button>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  types: [],
  sizes: [],
  price: 0,
};

export default PizzaBlock;
