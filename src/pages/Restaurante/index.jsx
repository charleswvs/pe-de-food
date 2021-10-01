import React, { useState } from 'react';

import { Card }  from '../../components/card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { restaurantes } from '../../mock/pe-de-food.json';

import "./restaurante.css"

const Restaurante = () => {
  const [listPage, setListPage] = useState({
    inicio: 0,
    fim: 4
  })

  const handleLeftList = () => {
    setListPage({
      inicio: 0,
      fim: 4
    })
  }

  const handleRightList = () => {
    setListPage({
      inicio: 1,
      fim: 5
    })
  }

  return (
    <main className="restauranteContainer">
      {restaurantes.map(item => (
        <section className="restauranteSection">
        <h2 style={{marginBottom: '30px'}}>RESTAURANTES {item.tipo} </h2>
        <div className='restaurantesList'>
          <button className="arrow" onClick={handleLeftList} disabled={listPage.inicio === 0}>
          <FiChevronLeft size={60}/>
          </button>
          
          <div className="grid">
            {item.restaurantes
            .slice(listPage.inicio, listPage.fim)
            .map(restaurante => (
              <Card margin='auto' width={230} height={230} imgUrl={restaurante.profileImg} imgAlt={restaurante.nome} />
            ))}
          </div>
          <button className="arrow" onClick={handleRightList} disabled={listPage.inicio === 1}>
            <FiChevronRight size={60}/>
          </button>
          
        </div>
      </section>
      ))}
    </main>
  )
}

export default Restaurante;