import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductForm({ onSubmit, initialValue, id }) {
  const initialState = {
    name: initialValue?.name || '',
    description: initialValue?.description || '',
    price: initialValue?.price || '',
    quantity: initialValue?.quantity || '',    
  }
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" name="name" id="name" value={product.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea name="description" id="description" rows="3" value={product.description} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="number" name="price" id="price" value={product.price} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input type="number" name="quantity" id="quantity" value={product.quantity} onChange={handleChange} className="form-control" />
      </div>
      <div className="my-4">
        <button className="btn btn-primary">Save</button>
        { id && (
          <span className="float-end">
            <Link to={`/products/${id}/delete`} className="btn btn-danger ms-2">
              Delete
            </Link>
          </span>
        )}
      </div>
    </form>
  )
}