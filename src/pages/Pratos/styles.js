import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  color: #2c0101;
  background: red;
`;

export const Top = styled.div`
  min-height: 450px;
  display: flex;
  gap: 30px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 130px;
  height: 264px;
  box-shadow: 6px 5px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: white;
`;

export const Title = styled.h3`
  margin-top: 16px;
  font-size: 14px;
`;

export const Text = styled.span`
  margin-top: 16px;
  font-size: 14px;
`;
