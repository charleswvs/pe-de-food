import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Pé de food</h1>
      <section className="loginContainer">
        <h2>Login</h2>

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

        <Link className="register" to="/restaurantes">
          <button className="buttonEntrar">Entrar</button>
        </Link>
        <Link className="register" to="/cadastrar">
          Cadastrar
        </Link>
      </section>
    </div>
  );
};

export default Login;
