import { createContext, useState } from 'react';

const CartContext = createContext({cartItems: []});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  function removeFromCart(product) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function getCartTotal() {
    let total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toLocaleString();
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };