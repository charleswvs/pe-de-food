import React from 'react';
import './styles.css';
import { Card } from '../../components/Card';
import { pratosDestaque } from '../../mock/pe-de-food.json';

const Pratos = () => {
  return (
    <div className="pratos-container">
      <h1 className="pratos-title">Pratos para você</h1>
      <div className="pratos-top">
        {pratosDestaque.map((prato) => (
          <div className="pratos-card-container" key={prato.id}>
            <Card
              imgUrl={prato.imgUrl}
              imgAlt={prato.imgAlt}
              width="130px"
              height="264px"
              key={prato.id}
            />
            <span>{prato.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pratos;
