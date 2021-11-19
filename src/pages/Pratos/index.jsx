import React, { useEffect, useState } from 'react';
import './styles.css';
import { Card } from '../../components/card';
import { Link } from 'react-router-dom';
import BackButton from '../../components/backButton';
import { useParams } from 'react-router';
import axios from 'axios';

const Pratos = () => {
  const { restauranteid } = useParams();
  const [pratos, setPratos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const getPratos = () => {
    axios
      .get(
        `https://afternoon-garden-13285.herokuapp.com/restaurante/${restauranteid}`
      )
      .then((res) => {
        setPratos(res.data.pratos);
        setCategorias(res.data.categorias);
      });
  };

  useEffect(() => {
    getPratos();
  }, []);

  return (
    <div className="pratos-page-container">
      <BackButton goTo="/restaurantes" />
      <h1 className="prato-title">Pratos para você</h1>
      <div className="pratos">
        {pratos.map((prato) => (
          <div className="pratos-card-container" key={prato.id}>
            <Link to={`/restaurante/${restauranteid}`}>
              <Card
                imgUrl={prato.imgUrl}
                imgAlt={prato.imgAlt}
                width={130}
                height={264}
                key={prato.id}
              />
            </Link>
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
              width={243}
              height={306}
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
