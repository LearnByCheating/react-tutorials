import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

export default function ProductItem() {
  const { id } = useParams();

  // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ['product', id], 
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/products/${id}`);
      return res.json();
    }
  });

  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        {product?.name}
        <span className="float-end">
          <Link to="/products" className="btn btn-secondary btn-sm ms-3">Product List</Link>
        </span>
      </h1>
      <p>Description: {product?.description}</p>
      <p>Price: {product?.price}</p>
      <p>Quantity: {product?.quantity}</p>
      <p>
        <Link to={`/products/${id}/update`} className="btn btn-info btn-sm">Update</Link>
        <Link to={`/products/${id}/delete`} className="btn btn-danger btn-sm ms-2">Delete</Link>
      </p>
      { isLoading && <div>Loading...</div> }
      { isError && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}
