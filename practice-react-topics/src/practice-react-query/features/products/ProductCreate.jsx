import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

export default function ProductCreate() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (product) => {
      const res = await fetch('http://localhost:4000/api/products/create', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      return res.json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
      navigate('/products', {state: { flash: { type: 'success', msg: 'Product has been created.'}}});
    },
  });

  const handleSubmit = (product) => {
    mutate(product);
  }

  return (
    <div className="mb-4">
      <h1>Create Product
        <span className="float-end">
          <Link to="/products" className="btn btn-secondary">Cancel</Link>
        </span>
      </h1>
      <hr />
      <ProductForm onSubmit={handleSubmit} />
      { isPending && <div>Adding product...</div> }
      { isError && <div>An error occurred: {error.message}</div> }
    </div>
  );
}