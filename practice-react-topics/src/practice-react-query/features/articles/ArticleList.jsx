import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export default function ArticleList() {
  const { data: articles, isLoading, isError, error } = useQuery({
    queryKey: ['articles'], 
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/api/articles');
      return res.json();
    }
  });

  return (
    <div>
      <h1>
        Articles
        <span className="float-end">
          <Link to="/articles/create" className="btn btn-primary btn-sm ms-3">Create Article</Link>
        </span>
      </h1>
      <ul className="list-group">
        {
          articles?.map((article) => (
            <li key={article.id} className="list-group-item">
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
              <span className="float-end">
                <Link to={`/articles/${article.id}/update`} className="badge text-bg-info text-decoration-none ms-3">Edit</Link>
                <Link to={`/articles/${article.id}/delete`} className="badge text-bg-danger text-decoration-none ms-2">Delete</Link>
              </span>
            </li>
          ))
        }
      </ul>
      { isLoading && <div>Loading...</div> }
      { isError && <div className="text-danger">{error?.message}</div> }
    </div>
  );
}
