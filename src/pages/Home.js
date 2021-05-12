import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBurgers } from '../state/actions';
import BurgersStoreService from '../services';
import Burger from '../components/Burger';

const Home = () => {
  const dispatch = useDispatch();
  const burgers = useSelector(state => state.burgers);

  useEffect(() => {
    if(!burgers.length) {
      const burgerStoreService = new BurgersStoreService();
      const data = burgerStoreService.getBurgers();
      dispatch(loadBurgers(data));
    }
  }, [burgers.length, dispatch]);

  const burgersArray = useMemo(() => (
    burgers.map((burger) => (
      <Burger
        key={burger.id.toString()}
        burger={burger}
      />
    ))
  ), [burgers]);

  return (
    <div className="burgers-wrap">
      { burgersArray }
    </div>
  );
};

export default Home;
