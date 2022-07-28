import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Styles/Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <section className="auth__app">
      <div className='auth__form'>
      <h1>Budgetify</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label>Username</label>
          <input
            id='username'
            type="text" 
            onChange={e => setUserName(e.target.value)}
            required 
          />
        </div>
        <div className="form__control">
          <label>Password</label>
          <input 
            id='poassword'
            type="password" 
            onChange={e => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className='button__group'>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </section>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};