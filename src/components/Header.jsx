import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../styles/components/Header.css';

//context
import AppContext from '../context/AppContext';

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>

      <div className="Header-checkout">
        <Link to="/checkout" aria-label="Checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;
