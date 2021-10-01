import React, { useState } from "react";

import { Card } from "../../components/card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { restaurantes } from "../../mock/pe-de-food.json";
import { Link } from 'react-router-dom';

import "./restaurantes.css";

const Restaurante = () => {
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

  return (
    <main className="restauranteContainerRestaurantes">
      {restaurantes.map((item, idx) => (
        <section key={item.tipo} className="restauranteSection">
          <h2 style={{ marginBottom: "30px" }}>RESTAURANTES {item.tipo} </h2>
          <div className="restaurantesList">
            <button
              className="arrow"
              onClick={handleLeftList}
              disabled={listPage.inicio === 0 || idx !== 0}
            >
              <FiChevronLeft size={40} />
            </button>

            <div className="grid">
              {item.restaurantes
                .slice(
                  idx === 0 ? listPage.inicio : 0,
                  idx === 0 ? listPage.fim : 4
                )
                .map((restaurante) => (
                  <Link to="/pratos">
                    <Card
                      key={`${restaurante.id}-${restaurante.nome}`}
                      margin="auto"
                      width={230}
                      height={230}
                      imgUrl={restaurante.profileImg}
                      imgAlt={restaurante.nome}
                    />
                  </Link>
                ))}
            </div>
            <button
              className="arrow"
              onClick={handleRightList}
              disabled={listPage.inicio === 1 || idx !== 0}
            >
              <FiChevronRight size={40} />
            </button>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Restaurante;
