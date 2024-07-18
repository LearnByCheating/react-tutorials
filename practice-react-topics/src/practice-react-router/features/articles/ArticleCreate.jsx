import { Link, useNavigate } from 'react-router-dom';

export default function ArticleCreate() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newArticle = { id: 5 };
    navigate(`/articles?id=${newArticle.id}`);
  }
  return (
    <div>
      <h1 className="border-bottom pb-3 mb-4">
        Create Article
        <Link to="/articles" className="btn btn-secondary btn-sm ms-3">Back to  Articles</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <p className="fw-bold">Form Fields go here...</p>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}