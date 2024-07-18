import { useSearchParams, useNavigate } from 'react-router-dom';

export default function ArticleDelete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  function handleClick() {
    alert('Delete request sent to server. Close alert to simulate success response.');
    navigate('/articles');
  }
  return (
    <div>
      <h1>
        Delete Article {id}
      </h1>
      <button onClick={handleClick} className="btn btn-danger">Delete</button>
      <button onClick={() => navigate(-1)} className="btn btn-secondary ms-2">Go Back</button>
    </div>
  );
}