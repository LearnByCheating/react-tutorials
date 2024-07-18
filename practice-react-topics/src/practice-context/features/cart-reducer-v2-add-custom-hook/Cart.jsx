import { useCart } from './CartContext.jsx';

export default function Cart () {
  const { cartItems, dispatch } = useCart();

  function addToCart(product) {
    dispatch({
      type: 'addedToCart',
      product: product,
    });
  }

  function removeFromCart(product) {
    dispatch({
      type: 'removedFromCart',
      product: product,
    });
  }

  function clearCart() {
    dispatch({
      type: 'clearedCart',
    });
  }
  
  function getCartTotal() {
    let total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toLocaleString();
  }

  return (
    <div>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            <img src={item.thumbnail} alt={item.title} height="50" />
            <h5 className="mb-1">{item.title}</h5>
            <p className="mb-1">${item.price.toLocaleString()}</p> 
            <p className="mb-1">
              Quantity: {item.quantity || 1}
              <span
                onClick={() => addToCart(item)}
                role="button"
                className="badge text-bg-secondary ms-2 me-1"
              >+</span>
              <span
                onClick={() => removeFromCart(item)}
                role="button"
                className="badge text-bg-secondary"
              >-</span>
            </p>         
          </li>
        ))}
      </ul>
      {
        cartItems.length > 0 ? (
          <div className="items-center mt-2">
            <h4>Total: ${getCartTotal()}</h4>
            <button 
              className="btn btn-sm btn-outline-secondary mb-2"
              onClick={clearCart}
            >Clear cart</button>
          </div>
        ) : (
          <h5>There are no items in your cart</h5>
        )
      }
    </div>
  );
}
