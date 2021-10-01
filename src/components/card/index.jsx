import React from 'react';
import './styles.css';

export const Card = ({ imgUrl, imgAlt, width, height, margin }) => {
  return (
    <div className="card" style={{ width: `${width}px`, height: `${height}px`, margin: margin ? margin : 0 }}>
      <img className="cardImg" src={imgUrl} alt={imgAlt} />
    </div>
  );
};
