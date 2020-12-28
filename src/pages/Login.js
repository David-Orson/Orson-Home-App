import React, { useState } from 'react';

import { loginUser } from "../redux/actions/userActions"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'password':
        setPassword(e.target.value)
      return
      case 'email':
        setEmail(e.target.value)
      return
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit} >
        <label>Email</label>
        <input name="email" type="text" value={email} onChange={handleChange} />
        <label>Password</label>
        <input name="password" type="password" value={password} onChange={handleChange} />
      </form>
      <a href="/">
        Home
      </a>
      <a href="/signup">
        Signup
      </a>
    </div>
  )
}

export default Login;