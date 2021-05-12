import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink, useParams} from 'react-router-dom';
import { addBurgersToCart } from '../state/actions';

const BurgerPage = () => {
  const { id } = useParams();
  const [burgerInfo, setBurgerInfo] = useState({});
  const [burgerIngredients, setBurgerIngredients] = useState([]);
  const [gap, setGap] = useState(true);

  const dispatch = useDispatch();
  const currentBurger = useSelector(state => state.burgers);

  const additionalIngredients = ['Сыр','Котлета', 'Огурец', 'Соус Кентукі', 'Зелень',  'Помидор'];

  useEffect(() => {
    if(gap) {
      setGap(false);
      currentBurger.forEach(item => {
        if(item['id'].toString() === id) {
          setBurgerInfo({...item});
          setBurgerIngredients([...item['ingredients']])
        }
      });
    }
  }, [currentBurger, id, gap]);

  function setBurgerToCart() {
    dispatch(addBurgersToCart({
      name: burgerInfo['name'],
      ingredients: burgerIngredients,
    }))
  }

  function removeBurgerIngredients(index) {
    if(burgerIngredients.length >= 3) {
      const newBurgerIngredients = burgerIngredients;
      newBurgerIngredients.splice(index, 1);
      setBurgerIngredients([...newBurgerIngredients]);
    }
    else {
      alert('Вы не можете больше удалять ингредиенты')
    }
  }

  function addBurgerIngredients(ingredient) {
    setBurgerIngredients([...burgerIngredients, ingredient]);
  }

  return (
    <div>
      <h1 className="burger-name">
        {burgerInfo['name']}
      </h1>
      <img
        className="burger-img"
        src={burgerInfo['img']}
        alt=""
      />
      <div>
        Ингедиенты
        <ul className="main-ingredients">
          {burgerIngredients &&
          burgerIngredients.map((item, index) =>
            <li
              key={burgerInfo['name'] + index}
              onClick={() => removeBurgerIngredients(index)}
            >
              {item}
              {' '}
              -
            </li>
          )
          }
        </ul>
      </div>
      <div className="additional-ingredients">
        Дополнительные ингедиенты
        <ul>
          {
            additionalIngredients.map((item, index) =>
            <li
              key={index}
              onClick={() => addBurgerIngredients(item)}
            >
              { item }
              {' '}
              +
            </li>
            )
          }
        </ul>
      </div>
      <NavLink
        className="add-to-cart"
        to="/cart"
        onClick={() => setBurgerToCart()}
      >
        Добавить в корзину
      </NavLink>
    </div>
  );
};

export default BurgerPage;
