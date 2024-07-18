import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    // Send delete request to the server. Upon successful response:
    navigate('/products');
  }
  return (
    <div>
      <h1>
        Delete Product {id}
      </h1>
      <button onClick={handleClick} className="btn btn-danger">Delete</button>
      <button onClick={() => navigate(-1)} className="btn btn-secondary ms-2">Go Back</button>
    </div>
  );
}