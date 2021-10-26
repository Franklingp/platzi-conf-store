import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';

//utils
import getTotalAmount from '../utils/getTotalAmount';

//styles
import '../styles/components/Payment.css';

function Payment({ history }) {
  const { state, addOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  //paypay options
  const options = {
    clientId: 'sb',
    currency: 'USD',
  };

  //handle paypal error
  const handleError = (error) => {
    alert('Ha ocurrido un errror al intentar procesar el pago');
    console.log(error);
  };

  //handle cancel
  const handleCancel = (error) => {
    alert('Ha cancelado el proceso del pago');
    console.log(error);
  };

  //handle paypal succes
  const handleSuccess = (details) => {
    addOrder({
      buyer,
      products: cart,
      details,
    });
    history.push('/checkout/success');
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
            onSuccess={(data) => handleSuccess(data)}
            onError={handleError}
            onCancel={handleCancel}
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
