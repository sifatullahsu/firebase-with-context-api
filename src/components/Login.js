import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        navigate('/')
      }) //console.log(result.user)
      .catch(error => console.error(error))

    // Form Reset
    form.reset();
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content">

        <form onSubmit={handleLogin} className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h4 className='text-xl font-semibold'>Login</h4>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;