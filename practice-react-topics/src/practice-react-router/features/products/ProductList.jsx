import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', category: 'electronics' },
  { id: 2, name: 'Product 2', category: 'automotive' },
  { id: 3, name: 'Product 3', category: 'housewares' },
  { id: 4, name: 'Product 4', category: 'electronics' },
]

export default function ProductList() {
  return (
    <div>
      <h1>
        Products
        <Link to="/products/create" className="btn btn-primary btn-sm ms-3">Create Product</Link>
      </h1>
      <ul className="list-group">
        {
          products.map((product) => (
            <li key={product.id} className="list-group-item">
              <Link to={`/products/${product.id}`}>View {product.name}</Link>
              <Link to={`/products/${product.id}/update`} className="badge text-bg-info text-decoration-none ms-3">Edit</Link>
              <Link to={`/products/${product.id}/delete`} className="badge text-bg-danger text-decoration-none ms-2">Delete</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
