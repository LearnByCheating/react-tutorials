import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function handleClick() {
    localStorage.removeItem('currentUser');
    setAuth({currentUser:'', isLoggedIn: false});

    return navigate('/');
  };
  return <button className="dropdown-item" onClick={handleClick}>Log Out</button>
}

export default Logout;
