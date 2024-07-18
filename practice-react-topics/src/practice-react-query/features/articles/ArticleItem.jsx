import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

export default function ArticleItem() {
  const { id } = useParams();

  // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const { data: article, isLoading, isError, error } = useQuery({
    queryKey: ['article', id], 
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/articles/${id}`);
      return res.json();
    }
  });

  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        {article?.title}
        <span className="float-end">
          <Link to="/articles" className="btn btn-secondary btn-sm ms-3">Back to Articles</Link>
        </span>
      </h1>
      <p>
        <Link to={`/articles/${id}/update`} className="btn btn-info btn-sm">Update</Link>
        <Link to={`/articles/${id}/delete`} className="btn btn-danger btn-sm ms-2">Delete</Link>
      </p>
      <p>Published: {article?.published.toString()}</p>
      <div className="prewrap mb-3">
        {article?.content}
      </div>
      { isLoading && <div>Loading...</div> }
      { isError && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}