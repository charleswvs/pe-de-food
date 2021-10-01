import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const CardContainer = styled.div`
  height: 200px;
  width: 100%;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`

export const Button = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  background-color: #FBCB6E;
  padding: 10px;
  justify-content: space-between;
  border-radius: 10px;
`;  

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  input {
    width: 30px;
    background-color: #C4C4C4;
    font-size: 25px;
    border: none;
    text-align: center;
  }
`;