import React from 'react';
import './styles.css';

export const Card = ({ imgUrl, imgAlt, width, height }) => {
  return (
    <div className="card" style={{ width: width, height: height }}>
      <img className="cardImg" src={imgUrl} alt={imgAlt} />
    </div>
  );
};
