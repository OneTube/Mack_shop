import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { clearCart, addBurgersToCart } from '../state/actions';
import { MemoizedBurgerToAdd } from '../components/BurgerToAdd';

const Cart = () => {
  const dispatch = useDispatch();

  const burgerInCart = useSelector(state => state.cart);
  const burgers = useSelector(state => state.burgers);

  const [cartBurgers, setCartBurgers] = useState([]);
  const [gap, setGap] = useState(true);

  useEffect(() => {
    if(gap) {
      setGap(false);
      setCartBurgers([...cartBurgers, ...burgerInCart]);
    }
  }, [cartBurgers, burgerInCart, gap]);

  function clearAllCart() {
    dispatch(clearCart())
  }

  function addExtraBurgerToCart(burger) {
    dispatch(addBurgersToCart(
      {
        name: burger['name']
      })
    );
    setCartBurgers([...cartBurgers, {
      name: burger['name']
    }]);
  }

  return (
    <div>
      <div>
        Ваш заказ:
        {' '}
        { !cartBurgers.length && 'Пуст' }
        <ul>
          {
            cartBurgers.map((item,index) => (
            <li key={item['name']+index+3}>
              {item['name']};
            </li>
          ))}
        </ul>
      </div>
      <div>
        <NavLink
          className="add-to-cart add-to-cart--remove"
          to="/"
          onClick={() => clearAllCart()}
        >
          Завершить
        </NavLink>
      </div>
      <div className="burgers-wrap__extra">
        Добавить ещё один бургер
        <div className="burgers-wrap__extra-inner">
          { burgers.map((burger) => (
            <MemoizedBurgerToAdd
              onClick={() => addExtraBurgerToCart(burger)}
              key={burger.id.toString()+1}
              burger={burger}
            />
          )) }
        </div>
      </div>
    </div>
  );
};

export default Cart;
