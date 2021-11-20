import React from 'react';

import "./restaurante.css"

import Produto from '../../components/produto';
import BackButton from '../../components/backButton';

import { useParams } from 'react-router';

const Restaurante = () => {
  const { restauranteid, restauranteNome } = useParams();

  return (
    <div style={{backgroundColor: '#E0DDDC'}}>
      <main className="restaurantContainer">
        <BackButton goTo={`/pratos/${restauranteid}`} />
        <section className="restaurantHeader">
          <img alt="resturante do seu zé" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" />
        </section>
        <h1>
          {restauranteNome}
        </h1>
        <div className="restaurantInputContainer">
          <input className="restaurantInput" placeholder="Digite o nome de um prato" />
          <button className="restaurantSearchButton">
            BUSCAR
          </button>
        </div>
        <div className="restaurantGrid">
          <Produto/>
        </div>
      </main>
    </div>
  )
}

export default Restaurante;