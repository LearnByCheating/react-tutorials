import { useState, useEffect } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
    }    
    getProducts();
  }, []);

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h2>Product List</h2>  

      <ul className="list-group">
      {
        products.map((product) => (
          <li key={product.id} className="list-group-item">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="img-thumbnail float-start my-2 me-4" 
              style={{height: "100px"}} />
            <h3 className='mt-2 mb-1'>{product.title}</h3>
            <p className='mb-1'>{product.description.slice(0, 50)}...</p>
            <p>${product.price}</p>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
