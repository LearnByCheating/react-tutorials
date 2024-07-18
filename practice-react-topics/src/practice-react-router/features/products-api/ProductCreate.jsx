import { Link, useNavigate } from 'react-router-dom';

export default function ProductCreate() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form data sent to server. Close alert to simulate success response.');
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
        <p>Form fields go here</p>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );

}