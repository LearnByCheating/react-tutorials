import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export default function ArticleUpdate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/articles?id=${id}`);
  }
  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        Update Article {id}
      </h1>
      <form onSubmit={handleSubmit}>
        <p className="fw-bold">Form Fields go here...</p>
        <button className="btn btn-primary">Save</button>
        <Link to="/articles" className="btn btn-secondary ms-2">Go to  Article List</Link>
        <Link to={`/articles?id=${id}`} className="btn btn-secondary ms-2">Go to Article</Link>
        <Link to={`/articles/delete/?id=${id}`} className="btn btn-danger ms-2">Delete Article</Link>
      </form>
    </div>
  );
}