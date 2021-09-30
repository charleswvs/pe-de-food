import React from 'react';
import { Link } from 'react-router-dom';
import './logon.css';

const Logon = () => {
  return (
    <div className="container">
      <h1>Pé de food</h1>
      <section className="loginContainer">
        <h2>Cadastrar</h2>

        <input
          className="nameInput"
          type="text"
          placeholder="Digite seu nome"
        />
        <input
          className="emailInput"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="Digite sua senha"
        />

        <button className="buttonEntrar">Cadastrar</button>
        <Link className="register" to="/">
          Voltar para o login
        </Link>
      </section>
    </div>
  );
};

export default Logon;
