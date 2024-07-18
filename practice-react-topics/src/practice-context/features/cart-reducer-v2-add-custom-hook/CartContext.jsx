import { useReducer, createContext, useContext } from 'react'

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
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
