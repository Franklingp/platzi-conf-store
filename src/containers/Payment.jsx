import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';

//utils
import getTotalAmount from '../utils/getTotalAmount';

//styles
import '../styles/components/Payment.css';

function Payment() {
  const { state } = useContext(AppContext);
  const { cart, buyer } = state;

  //paypay options
  const options = {
    clientId: '',
    currency: 'USD',
  };

  //handle paypal error
  const handleError = (error) => {
    alert('Ha ocurrido un errror al intentar procesar el pago');
    console.log(error);
  };

  //handle paypal succes
  const handleSuccess = (details, data) => {
    console.log(details);
    console.log(data);
    alert('Transaction completed by ' + details.payer.name.given_name);
  };

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
        <div className="Payment-item">
          <div className="Payment-element">
            <h4>Total</h4>
            <span>${getTotalAmount(cart)}</span>
          </div>
        </div>
        <div className="Payment-button">
          <PayPalButton
            onSuccess={handleSuccess}
            onError={handleError}
            options={options}
            amount={getTotalAmount(cart)}
          />
        </div>
        <div />
      </div>
    </div>
  );
}

export default Payment;
