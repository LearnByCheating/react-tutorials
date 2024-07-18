import { Link } from 'react-router-dom';

export default function ArticleItem({id}) {
  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        Article {id}
        <Link to="/articles" className="btn btn-secondary btn-sm ms-3">Go to  Article List</Link>
      </h1>
      <p className="fw-bold">Article details go here...</p>
      <Link to={`/articles/update?id=${id}`} className="btn btn-info btn-sm">Update Article</Link>
      <Link to={`/articles/delete?id=${id}`} className="btn btn-danger btn-sm ms-2">Delete Article</Link>
    </div>
  );
}