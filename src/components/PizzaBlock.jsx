import React, { useState } from 'react';

function PizzaBlock({ name, price, imageUrl, sizes, types }) { //pizzaBlock(props) => pizzaBlock({rtitle, price}) деструктуризация
  const typeNames = ["тонкое", "традиционное"]; //массив типов толщины теста
  const [pizzaCount, setPizzaCount] = useState(0); //хук useState для отрисовки числа на кнопке
  const [activeType, setActiveType] = useState(0);
  const [pizzaSizeActiv, setPizzaSizeActiv] = useState(0); //хук useState для отрисовки выбора размера пиццы

  const onClickAdd = () => {// функция onClickAdd вызывается по нажатию на кнопку
    setPizzaCount( pizzaCount + 1 ); 
  }

 


  
  // console.log(pizzaCount);
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li onClick={() => setActiveType(type)}className={activeType === type ? 'active' : ''}>{typeNames[type]}</li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li onClick={() => setPizzaSizeActiv(index)} className={pizzaSizeActiv === index ? "active" : ""}>{size} см.</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
          <button className="button button--outline button--add" onClick={onClickAdd}> 
            <svg
              strokeWidth="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.811.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.210.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.     3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
            </svg>
              <span>Добавить</span>
                <i>{pizzaCount}</i>
          </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
