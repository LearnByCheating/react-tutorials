import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

export default function ArticleDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`http://localhost:4000/api/articles/${id}/delete`, {
        method: 'DELETE'
      })
      console.log('Status response code:', res.status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      navigate('/articles', 
        {state: { flash: { type: 'success', msg: 'Article has been deleted.'}}});
    }
  })

  const handleDelete = () => {
    mutate(id);
  }

  return (
    <div className="mb-4">
      <h1 className="mt-4">Delete Article</h1>
      <hr /> 

      <p>Are you sure you want to delete this article?</p>
      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Yes - Delete Article
      </button>
      <button onClick={() => navigate(-1)} className="btn btn-dark">No - Cancel</button>
      { isPending && <div>Deleting article...</div> }
      { isError && <div>An error occurred: {error.message}</div> }
    </div>
  );
}