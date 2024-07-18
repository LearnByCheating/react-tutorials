import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'; // for v2
import { AuthContext } from './AuthContext'; // for v2
// import { useSetAuth } from './AuthContext'; // for v3

function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext); // for v2
  // const setAuth = useSetAuth(); // for v3

  function handleClick() {
    setAuth({currentUser:'', isLoggedIn: false}); // for v2 and v3
    return navigate('/');
  };
  return <button className="dropdown-item" onClick={handleClick}>Log Out</button>
}

export default Logout;
