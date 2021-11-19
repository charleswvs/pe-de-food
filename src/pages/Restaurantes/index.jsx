import React, { useEffect, useState } from 'react';
import { Card } from '../../components/card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './restaurantes.css';

const Restaurante = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [listPage, setListPage] = useState({
    inicio: 0,
    fim: 4,
  });

  const handleLeftList = () => {
    setListPage({
      inicio: 0,
      fim: 4,
    });
  };

  const handleRightList = () => {
    setListPage({
      inicio: 1,
      fim: 5,
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const { data } = await axios.get(
      `https://afternoon-garden-13285.herokuapp.com/restaurantes`
    );

    if (data) {
      setRestaurantes(data);
    }
  };

  return (
    <main className="restauranteContainerRestaurantes">
      <section className="restauranteSection">
        <h2 style={{ marginBottom: '30px' }}>RESTAURANTES JAPONESES</h2>
        <div className="restaurantesList">
          <button
            className="arrow"
            onClick={handleLeftList}
            disabled={listPage.inicio === 0}
          >
            <FiChevronLeft size={40} />
          </button>

          <div className="grid">
            {restaurantes.slice(listPage.inicio, listPage.fim).map((item) => (
              <Link to={`/pratos/${item.id}`} key={`${item.id}-${item.nome}`}>
                <Card
                  margin="auto"
                  width={230}
                  height={230}
                  imgUrl={item.profileImg}
                  imgAlt={item.nome}
                />
              </Link>
            ))}
          </div>
          <button
            className="arrow"
            onClick={handleRightList}
            disabled={listPage.inicio === 1}
          >
            <FiChevronRight size={40} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Restaurante;
