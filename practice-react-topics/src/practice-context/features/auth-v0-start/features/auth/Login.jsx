import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState, useContext } from 'react'; // for v2
// import { AuthContext } from './AuthContext.jsx'; // for v2
// import { useSetAuth } from './AuthContext'; // for v3

function Login() {
  const [email, setEmail] = useState('me@example.com');
  const [password, setPassword] = useState('password');
  const [errors, setErrors] = useState({});
  const errorMessage = null;
  const navigate = useNavigate();
  // const { setAuth } = useContext(AuthContext); // for v2
  // const setAuth = useSetAuth(); // for v3

  async function handleLogin(e) {
    e.preventDefault();
    setErrors({});
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({ email, password }),          
      });
      const data = await res.json();
      if (res.ok) {
        // setAuth({ currentUser: data, isLoggedIn: true }); // for v2 and v3
        navigate(`/profile/${data.id}`);
      } else {
        setErrors(data);
      }
    } catch (err) {
      setErrors({...errors, message: err.message});
    }
    setPassword('');
  };

  return (
    <div className="container mb-4">
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleLogin} className="card">
            <h3 className="card-header text-center">
              Log In
            </h3>
            { errors?.message &&
              <h6 className="list-group list-group-item list-group-item-danger py-2">
                {errors.message ? errors.message : 'Sorry, there was a problem.'}
              </h6>}
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor='email' className="form-label">Email:</label>
                <input
                  type='text'
                  id='email'
                  placeholder='enter "me@example.com"'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={errors.email ? 'form-control is-invalid' : 'form-control'}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-2">
                <label htmlFor='password' className="form-label">Password:</label>
                <input
                  type='password'
                  id='password'
                  placeholder='enter "password"'
                  value={password}
                  className={errors.password ? 'form-control is-invalid' : 'form-control'}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
            </div>
            <div className="card-footer">
              <input type="submit" value="Log In" className="btn btn-primary shadow-none" />      
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;