import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

//styles
import '../styles/components/Payment.css';

function Payment() {
  const { state } = useContext(AppContext);
  const { cart, buyer } = state;

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map(({ title, price, id }, index) => (
          <div className="Payment-item" key={`${id}-${index}`}>
            <div className="Payment-element">
              <h4>{title}</h4>
              <span>${price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">Boton de paypal</div>
        <div />
      </div>
    </div>
  );
}

export default Payment;
