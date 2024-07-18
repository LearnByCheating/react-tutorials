import { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext.jsx'; 
import Cart from './Cart.jsx';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://dummyjson.com/products/category/laptops');
      const data = await res.json();
      setProducts(data.products);
    }    
    getProducts();
  }, []);

  return (
    <div className="row">
      <div className="col-9">
        <h2>Products</h2>
        <ul className="list-group">
        {
          products.map((product) => (
            <li key={product.id} className="list-group-item">
              <img src={product.thumbnail} alt={product.title} className="img-thumbnail float-start my-2 me-4" style={{height: "100px"}} />
              <h3 className='mt-2 mb-1'>{product.title}</h3>
              <p className='mb-1'>{product.description.slice(0, 50)}...</p>
              <p>
                ${product.price.toLocaleString()}
                <button 
                  className='ms-2 btn btn-sm btn-outline-secondary'
                  onClick={() => addToCart(product)}
                >Add to cart</button>
              </p>
            </li>
          ))
        }
        </ul>
      </div>

      <div className="col-3 card">
        <h3>Shopping Cart</h3>
        <Cart />
      </div>
    </div>
  )
}
