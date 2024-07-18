import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

export default function ProductUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: product, isLoading, isError: isQueryError, error: queryError } = useQuery({
    queryKey: ['product', id], 
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/products/${id}/update`);
      return res.json();
    }
  });

  // const updateMutation = useMutation({
  const { mutate, isPending, isError: isMutationError, error: mutationError } = useMutation({
    mutationFn: async (product) => {
      const res = await fetch(`http://localhost:4000/api/products/${product.id}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] }),
      queryClient.invalidateQueries({ queryKey: ['product', id] }),
      navigate(`/products/${id}`)
    }
  })

  function handleSubmit(productFromForm) {
    mutate({ id, ...productFromForm });
  }

  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">Update Product
        <span className="float-end">
          <button onClick={() => navigate(-1)} className="btn btn-secondary ms-2">
            Cancel
          </button>
        </span>
      </h1>
      { Boolean(product) && <ProductForm onSubmit={handleSubmit} initialValue={product} id={id} />}
      
      { isLoading && <div>Loading...</div> }
      { isQueryError && <div>Oops, an error has occurred: {queryError}</div> }
      { isPending && <div>Updating product...</div> }
      { isMutationError && <div>Oops, an error has occurred: {mutationError.message}</div> }
    </div>
  );
}
