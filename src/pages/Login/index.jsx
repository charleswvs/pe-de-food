import React, {useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({email: "", password: ""});


  const handleChangeEmail = event => {
    setEmail(event.target.value);
  }

  const handleChangePassword = event => {
    setPassword(event.target.value);
  }

  const handleSubmit = async event => {
    event.preventDefault();

    const user = {
      email: email,
      password: password
    };

    axios.post(`http://localhost:8080/login`, user )
      .then(res => {
        console.log(res);
        setUser(res.data)
      })
      // Como limpar input dps que submeter?
  }
  return (
    <div className="container">
      <h1>Pé de food</h1>
      <section className="loginContainer">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
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
          <button className="buttonEntrar">Entrar</button>
        </form>

        {/* Como fazer para, quando o usuário clicar em entrar, redirecionar para tela de restaurantes */}
        <Link className="register" to="/restaurantes">
        </Link>
        <Link className="register" to="/cadastrar">
          Cadastrar
        </Link>
      </section>
    </div>
  );
};

export default Login;
