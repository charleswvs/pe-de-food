import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './logon.css';

const Logon = () => {

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
    console.log(user)

    axios.post(`http://localhost:8080/cadastro`, user )
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
        <h2>Cadastrar</h2>

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
