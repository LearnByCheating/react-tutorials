import { CartProvider } from './CartContext.jsx';
import Products from './Products.jsx';

export default function App() {

  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );
}
