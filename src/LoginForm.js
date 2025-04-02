// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="auth-container">
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Нэвтрэх</h2>
      <div className="input-group">
      <label htmlFor="email">Цахим шуудан</label>
      <input
        id="email"
        type="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input"
      />

    </div>

    <div className="input-group">
      <label htmlFor="password">Нууц үг</label>
      <input
        id="password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-input"
      />
    </div>

      <button type="submit" className="submit-button">
      Нэвтрэх
    </button>

  </form>
</div>
  );
};

export default LoginForm;