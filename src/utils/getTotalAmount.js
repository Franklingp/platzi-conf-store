// get total amount

const getTotalAmount = (cart) => {
  const reducer = (acumulate, currentProduct) =>
    acumulate + currentProduct.price;
  return cart.reduce(reducer, 0);
};

export default getTotalAmount;
