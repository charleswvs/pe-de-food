import React from 'react';
import { Container, Top, CardContainer, Title, Text } from './styles.js';
import { Card } from '../../components/Card';
import pratos from '../../mock/pe-de-food.json';

const Pratos = () => {
  return (
    <Container>
      <div>
        <Title>Pratos para você</Title>
        <Top>
          {pratos.map((prato) => {
            <CardContainer key={prato.id}>
              <Card
                imgUrl={prato.imageUrl}
                imgAlt={prato.imageAlt}
                width="130px"
                height="264px"
              />
              <Text>{prato.nome}</Text>
            </CardContainer>;
          })}
        </Top>
      </div>
    </Container>
  );
};

export default Pratos;
