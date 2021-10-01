import React from 'react';
import './styles.css';
import { Card } from '../../components/Card';
import { pratosDestaque, categorias } from '../../mock/pe-de-food.json';

const Pratos = () => {
  return (
    <div className="pratos-page-container">
      <h1 className="prato-title">Pratos para você</h1>
      <div className="pratos">
        {pratosDestaque.map((prato) => (
          <div className="pratos-card-container" key={prato.id}>
            <Card
              imgUrl={prato.imgUrl}
              imgAlt={prato.imgAlt}
              width="130px"
              height="264px"
              key={prato.id}
            />
            <span className="name">{prato.nome}</span>
          </div>
        ))}
      </div>

      <h1 className="categoria-title">Categorias</h1>
      <div className="categorias">
        {categorias.map((categoria) => (
          <div className="categorias-card-container" key={categoria.id}>
            <Card
              imgUrl={categoria.imgUrl}
              imgAlt={categoria.nome}
              width="243px"
              height="306px"
              key={categoria.id}
            />
            <span className="name">{categoria.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pratos;
