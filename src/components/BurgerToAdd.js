import React from 'react';
import PropTypes from 'prop-types';

export function BurgerToAdd({ burger, onClick }) {
  const { name, img } = burger;

  return (
    <div className="burger__item" onClick={onClick}>
      <img className="burger__item-img" src={img} alt="" />
      {name}
    </div>
  );
}

BurgerToAdd.propTypes = {
  burger: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export const MemoizedBurgerToAdd = React.memo(BurgerToAdd);
