import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['products'], 
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/api/products');
      return res.json();
    }
  });

  return (
    <div>
      <h1>
        Products
        <span className="float-end">
          <Link to="/products/create" className="btn btn-primary btn-sm ms-3">Create Product</Link>
        </span>
      </h1>
      <ul className="list-group">
        {
          products?.map((product) => (
            <li key={product.id} className="list-group-item">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <span className="float-end">
                <Link to={`/products/${product.id}/update`} className="badge text-bg-info text-decoration-none">Edit</Link>
                <Link to={`/products/${product.id}/delete`} className="badge text-bg-danger text-decoration-none ms-1">Delete</Link>
              </span>
            </li>
          ))
        }
      </ul>
      { isLoading && <div>Loading...</div> }
      { isError && <div className="text-danger">{error?.message}</div> }
    </div>
  );
}
