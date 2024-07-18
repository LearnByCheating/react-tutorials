import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleForm from './ArticleForm';

export default function ArticleUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: article, isLoading, isError: isQueryError, error: queryError } = useQuery({
    queryKey: ['article', id], 
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/articles/${id}/update`);
      return res.json();
    }
  });

  const { mutate, isPending, isError: isMutationError, error: mutationError } = useMutation({
    mutationFn: async (article) => {
      const res = await fetch(`http://localhost:4000/api/articles/${article.id}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article)
      })
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] }),
      queryClient.invalidateQueries({ queryKey: ['article', id] }),
      navigate(`/articles/${id}`)
    }
  })

  function handleSubmit(articleFromForm) {
    mutate({ id, ...articleFromForm });
  }

  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">Update Article
        <span className="float-end">
          <button onClick={() => navigate(-1)} className="btn btn-secondary ms-2">
            Cancel
          </button>
        </span>
      </h1>
      { Boolean(article) && <ArticleForm onSubmit={handleSubmit} initialValue={article} id={id} />}
      
      { isLoading && <div>Loading...</div> }
      { isQueryError && <div>Oops, an error has occurred: {queryError}</div> }
      { isPending && <div>Updating article...</div> }
      { isMutationError && <div>Oops, an error has occurred: {mutationError.message}</div> }
    </div>
  );
}
