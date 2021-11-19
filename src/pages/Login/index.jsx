import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`https://afternoon-garden-13285.herokuapp.com/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${res.data.token}`;
        console.log(res);
        history.push('/restaurantes');
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className="container">
      <h1>Pé de food</h1>
      <section className="loginContainer">
        <h2>Login</h2>

        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            className="emailInput"
            type="email"
            onChange={handleChangeEmail}
            placeholder="Digite seu e-mail"
          />
          <input
            className="passwordInput"
            type="password"
            onChange={handleChangePassword}
            placeholder="Digite sua senha"
          />
          <button className="buttonEntrar" type="submit">
            Entrar
          </button>
        </form>

        <Link className="register" to="/cadastrar">
          Cadastrar
        </Link>
      </section>
    </div>
  );
};

export default Login;
