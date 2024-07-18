import { useReducer, useEffect, createContext, useContext } from 'react'

const CartContext = createContext({cartItems: [ ]});

function useCart() {
  return useContext(CartContext);
}

function cartReducer(cartItems, action) {
  switch (action.type) {
    case 'addedToCart': {
      const isItemInCart = cartItems.find((cartItem) => cartItem.id === action.product.id);

      if (isItemInCart) {
        return cartItems.map((cartItem) =>
          cartItem.id === action.product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...cartItems, { ...action.product, quantity: 1 }];
      }
    }
    case 'removedFromCart': {
      const isItemInCart = cartItems.find((cartItem) => cartItem.id === action.product.id);

      if (isItemInCart.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== action.product.id);
      } else {
        return cartItems.map((cartItem) =>
          cartItem.id === action.product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    }
    case 'clearedCart': {
      return [];
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function CartProvider({ children }) {
  const initialValue = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : [ ];
  const [cartItems, dispatch] = useReducer(cartReducer, initialValue);

  useEffect(() => {
    const newValue = JSON.stringify(cartItems.length > 0 ? cartItems : []);
    localStorage.setItem('cartItems', newValue);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { useCart, CartProvider };

