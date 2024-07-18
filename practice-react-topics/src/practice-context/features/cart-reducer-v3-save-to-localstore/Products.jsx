import { useState, useContext, useEffect } from 'react';
import Cart from './Cart.jsx';
import { useCart } from './CartContext.jsx';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cartItems, dispatch } = useCart();

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://dummyjson.com/products/category/smartphones');
      const data = await res.json();
      setProducts(data.products);
    }
    getProducts();
  }, []);

  function addToCart(product) {
    dispatch({
      type: 'addedToCart',
      product: product,
    });
  }

  return (
    <div>
      <h2>
        Products
        <button className="btn btn-outline-success float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          Shopping Cart
          <span className="ms-2 badge text-bg-secondary fs-6">{cartItems.length}</span>
        </button>
      </h2>
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

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart  
          </h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <Cart />
        </div>
      </div>
    </div>
  )
}
