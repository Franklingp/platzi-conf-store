import React from 'react';
import { Link } from 'react-router-dom';

//styles
import '../styles/components/Checkout.css';

function CheckOut() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de compra:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $10</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOut;
