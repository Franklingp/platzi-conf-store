import React from 'react';
import { Link } from 'react-router-dom';

//styles
import '../styles/components/Header.css';

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>

      <div className="Header-checkout">
        <Link to="/checkout">
          <i class="fas fa-shopping-basket"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
