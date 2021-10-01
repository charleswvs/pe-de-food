import './restaurante.css';
import React from 'react';
import Produto from '../../components/produto';

const Restaurante = () => {
  return (
    <div style={{backgroundColor: '#E0DDDC'}}>
      <main className="restaurantContainer">
        <section className="restaurantHeader">
          <img alt="resturante do seu zé" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" />
        </section>
        <h1>
          Recanto do seu zé - sanduíches artesanais
        </h1>
        <div className="restaurantInputContainer">
          <input className="restaurantInput" placeholder="Digite o nome de um prato" />
          <button className="restaurantSearchButton">
            BUSCAR
          </button>
        </div>
        <div className="restaurantGrid">
          <Produto/>
          <Produto/>
          <Produto/>
          <Produto/>
        </div>
      </main>
    </div>
  )
}

export default Restaurante;