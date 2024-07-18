import { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import ArticleItem from './ArticleItem';

let articles = [
  { id: 1, title: 'Article 1', category: 'electronics' },
  { id: 2, title: 'Article 2', category: 'automotive' },
  { id: 3, title: 'Article 3', category: 'housewares' },
  { id: 4, title: 'Article 4', category: 'electronics' },
];

export default function ArticleList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [categorySelected, setCategorySelected] = useState(category || '');
  const title = searchParams.get('title');
  const [titleText, setTitleText] = useState(title || '');  
  const id = searchParams.get('id');

  if (id) return <ArticleItem id={id} />;

  function handleCategoryChange(e) {
    const newCategory = e.target.value;
    setCategorySelected(newCategory);
    if (titleText) setTitleText('');
    if (newCategory === '') {
      navigate('/articles');
    } else {
      navigate(`/articles?category=${encodeURIComponent(newCategory)}`);
    }
  }

  function handleTitleSubmit(e) {
    if (titleText) {
      e.preventDefault();
      if (categorySelected) setCategorySelected('');
      navigate(`/articles?title=${encodeURIComponent(titleText)}`);
    }
  }

  let filteredArticles = articles;
  if (category) {
    filteredArticles = articles.filter((article) => article.category === category);
  } else if (title) {
    filteredArticles = articles.filter((article) => {
      return article.title.split(' ').some((word) =>
        word.toLowerCase().startsWith(title.toLowerCase())
      )
    })
  }

  return (
    <div>
      <h1>
        Articles
        <Link to="/articles/create" className="btn btn-primary btn-sm ms-3">Create Article</Link>
      </h1>
      <hr />

      <div className="row">
        <div className="col">
          <select 
            value={categorySelected} 
            onChange={handleCategoryChange} 
            className="form-select me-2"
          >
            <option defaultValue disabled hidden>Select Category</option>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="automotive">Automotive</option>
            <option value="housewares">Housewares</option>
          </select> 
        </div>
        <form onSubmit={handleTitleSubmit} className="d-flex col">
          <input 
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            type="search" placeholder="Search Title key word" 
            className="form-control me-2"
          />
          <button className="btn btn-outline-success">Search</button>
        </form>
      </div>
      <hr />

      <ul className="list-group">
        {
          filteredArticles.map((article) => (
            <li key={article.id} className="list-group-item">
              <Link to={`/articles?id=${article.id}`}>View {article.title}</Link>
              <Link to={`/articles/update?id=${article.id}`} className="badge text-bg-info text-decoration-none ms-3">Edit</Link>
              <Link to={`/articles/delete?id=${article.id}`} className="badge text-bg-danger text-decoration-none ms-2">Delete</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
