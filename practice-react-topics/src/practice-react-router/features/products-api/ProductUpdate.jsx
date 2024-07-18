import { Link, useParams, useNavigate } from 'react-router-dom';

export default function ProductUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form data sent to server. Close alert to simulate success response.');
    navigate(`/products/${id}`);
  }
  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        Update Product {id}
      </h1>
      <form onSubmit={handleSubmit}>
        <p>Form fields go here</p>
        <button className="btn btn-primary">Save</button>
        <Link to="/products" className="btn btn-secondary ms-2">Go to  Product List</Link>
        <Link to={`/products/${id}`} className="btn btn-secondary ms-2">Go to Product</Link>
        <Link to={`/products/${id}/delete`} className="btn btn-danger ms-2">Delete Product</Link>
      </form>
    </div>
  );
}