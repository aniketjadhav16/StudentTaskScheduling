import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdKey } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      navigate('/calendar');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const companyName = 'Task Scheduler'
  const companySlogan = 'Your ultimate study planner and partner finder.'

  return (
    // Container
    <div className="card md:card-side bg-base-300 shadow-xl w-[90%] max-w-[350px] md:max-w-[900px] mx-auto my-6">

      {/* Welcome portion */}
      <div className='min-h-[350px] md:min-h-[500px] md:w-[60%] bg-primary flex flex-col justify-around rounded-t-xl md:rounded-l-xl md:rounded-tr-none items-start px-4'>
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-neutral md:ml-6">Welcome to {companyName}!</h1>
          <h2 className='text-lg text-neutral md:ml-6'>{companySlogan}</h2>
        </div>
        <img src='/images/login/students.svg' className='w-[75%] h-auto md:ml-6' />
      </div>

      {/* Right - Form side */}
      <div className="mx-auto my-auto">
        <div className="card-actions flex-col my-6 md:my-0">
          <h2 className='text-xl font-bold'>Login</h2>
          <span>Enter your account details:</span>

          {/* Form Start */}
          <form onSubmit={handleLogin} className='my-4 w-full'>
            <label className="input input-bordered flex items-center mb-2">
              <MdEmail />
              <input
                type="email"
                value={email}
                placeholder="Email"
                autoComplete='email'
                className='ml-2'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="input input-bordered flex items-center my-2">
              <MdKey />
              <input
                type="password"
                value={password}
                placeholder='Password'
                autoComplete='off'
                className='ml-2'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <button
              type="submit"
              className={email && password ? 'btn btn-active btn-primary w-full' : 'btn btn-active btn-ghost disabled:btn-ghost w-full'}
              disabled={email && password ? false : true}
            >
              Login
            </button>
          </form>
          {/* Form End */}

          {/* Sign up link */}
          <div className='my-6'>
            <span>Don't have an account yet? <a href="#" className="link-primary font-bold">Sign Up</a></span>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Login;
