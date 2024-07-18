import { Link, useParams } from 'react-router-dom';

export default function ProductItem() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        Product {id}
        <Link to="/products" className="btn btn-secondary btn-sm ms-3">Go to Product List</Link>
      </h1>
      <p>Product details go here.</p>
      <Link to={`/products/${id}/update`} className="btn btn-info btn-sm">Update</Link>
      <Link to={`/products/${id}/delete`} className="btn btn-danger btn-sm ms-2">Delete</Link>
    </div>
  );
}