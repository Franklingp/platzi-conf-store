import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//utils
import getTotalAmount from '../utils/getTotalAmount';

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

  return (
    <>
      <Helmet>
        <title>Lista de pedidos - Platzi Conf Store</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@franklin_gp" />
        <meta name="twitter:creator" content="@franklin_gp" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de compra:</h3>
          ) : (
            <div className="Checkout-empity">
              <h3>El carrito esta vacio...</h3>
              <i className="fas fa-wind"></i>
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
            <h3>{`Precio total: $${getTotalAmount(cart)}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default CheckOut;
