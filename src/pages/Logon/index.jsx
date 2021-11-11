import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './logon.css';

const Logon = () => {
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
      .post(`https://afternoon-garden-13285.herokuapp.com/cadastro`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        history.push('/');
        setEmail('');
        setPassword('');
      });
  };
  return (
    <div className="container">
      <h1>Pé de food</h1>
      <section className="loginContainer">
        <h2>Cadastrar</h2>

        <form className="formContainer" onSubmit={handleSubmit}>
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

          <button className="buttonEntrar">Cadastrar</button>
        </form>
        {/* Forçar o usuário a voltar pra tela inicial */}
        <Link className="register" to="/">
          Voltar para o login
        </Link>
      </section>
    </div>
  );
};

export default Logon;
