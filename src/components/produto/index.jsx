import React, { useState } from "react";
import {
  Container,
  CardContainer,
  CardContent,
  Button,
  InputContainer,
} from "./styles";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Produto = () => {
  const [quantidade, setQuantidade] = useState(0);
  const valor = 25;
  return (
    <Container>
      <CardContainer>
        <img src="https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80" />
      </CardContainer>
      <CardContent>
        <h2>Sandubão</h2>
        <InputContainer>
          <AiFillMinusCircle
            color="#C4C4C4"
            size={30}
            onClick={() =>
              setQuantidade((quantidade) =>
                quantidade > 0 ? quantidade - 1 : quantidade
              )
            }
          />
          <input value={quantidade} />
          <AiFillPlusCircle
            color="#C4C4C4"
            size={30}
            onClick={() =>
              setQuantidade((quantidade) =>
                quantidade >= 0 ? quantidade + 1 : quantidade
              )
            }
          />
        </InputContainer>
        <Button>
          <span>R${(valor * quantidade).toFixed(2)}</span>
          <span>COMPRAR</span>
        </Button>
      </CardContent>
    </Container>
  );
};

export default Produto;
