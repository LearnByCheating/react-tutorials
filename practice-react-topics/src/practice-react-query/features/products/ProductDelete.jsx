import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`http://localhost:4000/api/products/${id}/delete`, {
        method: 'DELETE'
      })
      console.log('Status response code:', res.status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      navigate('/products', 
        {state: { flash: { type: 'success', msg: 'Product has been deleted.'}}});
    }
  })

  const handleDelete = () => {
    mutate(id);
  }

  return (
    <div>
      <h1>Delete Product</h1>
      <hr />
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      <button onClick={() => navigate(-1)} className="btn btn-secondary ms-2">
        Back
      </button>
      { isPending && <div>Deleting product...</div> }
      { isError && <div>An error occurred: {error.message}</div> }
    </div>
  );
}