import React from 'react';
import './styles.css';

const Card = ({
    imgUrl,
    imgAlt,
    width,
    height
}) => {
  return (
    <div className="cardContainer">
        <div className="card" width = { width } height = { height }>
            <img className="cardImg" src = { imgUrl } alt = { imgAlt }/>
        </div>
    </div>
  );
};

export default Card;
