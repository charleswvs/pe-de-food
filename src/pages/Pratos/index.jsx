import React from 'react';
import './styles.css';

const Pratos = (pratos) => {
  return (
    <div className="container">
      <div>
        <h3 className="title">Pratos para você</h3>
        <div className="top">
          <div className="cardContainer">
            <div className="card"></div>
            <span className="text">Panqueca doce</span>
          </div>
          <div className="cardContainer">
            <div className="card"></div>
            <span className="text">Panqueca doce</span>
          </div>
          <div className="cardContainer">
            <div className="card"></div>
            <span className="text">Panqueca doce</span>
          </div>
          <div className="cardContainer">
            <div className="card"></div>
            <span className="text">Panqueca doce</span>
          </div>
          <div className="cardContainer">
            <div className="card"></div>
            <span className="text">Panqueca doce</span>
          </div>
          <div className="cardContainer">
            <div className="card"></div>
            <span className="text">Panqueca doce</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pratos;
