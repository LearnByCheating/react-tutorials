import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArticleForm({ onSubmit, initialValue, id }) {
  const initialState = {
    title: initialValue?.title || '',
    content: initialValue?.content || '',
    published: initialValue?.published || false,
  }
  const [article, setArticle] = useState(initialState);
  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(article);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" name="title" id="title" value={article.title} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="content" className="form-label">Content</label>
        <textarea name="content" id="content" rows="3" value={article.content} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-check my-2">
        <input type="checkbox" id="published" 
          checked={article.published}
          onChange={() => setArticle({...article, published: !article.published})}
          className="form-check-input" />
        <label htmlFor="published" className="form-check-label">Publish</label>
      </div>
      <div className="my-4">
        <button className="btn btn-primary">Save</button>
        { id && (
          <span className="float-end">
            <Link to={`/articles/${id}/delete`} className="btn btn-danger ms-2">
              Delete
            </Link>
          </span>
        )}
      </div>
    </form>
  )
}