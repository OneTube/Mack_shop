import './App.scss';
import Home from './pages/Home';
import Cart from './pages/Cart';
import BurgerPage from './pages/BurgerPage';
import {
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="main-wrap">
      <header className="header">
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink exact to="/">меню</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/cart">Корзина</NavLink>
          </li>
        </ul>
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/burger_page/:id" component={BurgerPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
