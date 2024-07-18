import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import ArticleForm from './ArticleForm';

export default function ArticleCreate() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (article) => {
      const res = await fetch('http://localhost:4000/api/articles/create', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
      });
      return res.json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      navigate('/articles', {state: { flash: { type: 'success', msg: 'Article has been created.'}}});
    },
  });

  const handleSubmit = (article) => {
    mutate(article);
  }

  return (
    <div className="mb-4">
      <h1>Create Article
        <span className="float-end">
          <Link to="/articles" className="btn btn-secondary">Cancel</Link>
        </span>
      </h1>
      <hr />
      <ArticleForm onSubmit={handleSubmit} />
      { isPending && <div>Adding article...</div> }
      { isError && <div>An error occurred: {error.message}</div> }
    </div>
  );
}