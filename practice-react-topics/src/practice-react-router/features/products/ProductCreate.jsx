import { Link, useNavigate } from 'react-router-dom';

export default function ProductCreate() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Send update to the server. Upon successful response:
    const newProduct = { id: 5 };
    navigate(`/products/${newProduct.id}`);
  }
  return (
    <div>
      <h1>
        Create Product
        <Link to="/products" className="btn btn-secondary btn-sm ms-3">Back to  Products</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <p className="fw-bold">Form Fields go here...</p>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}