import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="border-bottom pb-3 mb-3">
        Profile of User id: {id}
      </h1>
      <p>User info goes here.</p>
    </div>
  );
}