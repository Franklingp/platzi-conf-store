import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../styles/components/Checkout.css';

//context
import AppContext from '../context/AppContext';

function CheckOut() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  //handle remove product
  const removeProduct = (index) => {
    removeFromCart(index);
  };

  //handle total
  const handleTotalAmount = () => {
    const reducer = (acumulate, currentProduct) =>
      acumulate + currentProduct.price;
    return cart.reduce(reducer, 0);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de compra:</h3>
        ) : (
          <div className="Checkout-empity">
            <h3>El carrito esta vacio...</h3>
            <i class="fas fa-wind"></i>
            <Link to="/">Volver a la tienda</Link>
          </div>
        )}

        {cart.length > 0 &&
          cart.map((product, index) => (
            <div className="Checkout-item" key={`${product.id} - ${index}`}>
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>{`$${product.price}`}</span>
              </div>
              <button type="button" onClick={() => removeProduct(index)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $${handleTotalAmount()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
