import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Burger = ({ burger }) => {
  const { id, name, img } = burger;

  return (
    <NavLink
      className="burger__item"
      to={`/burger_page/${id}`}
    >
      <img className="burger__item-img" src={img} alt="" />
      {name}
    </NavLink>
  );
};

Burger.propTypes = {
  burger: PropTypes.shape().isRequired,
};

export default Burger;
