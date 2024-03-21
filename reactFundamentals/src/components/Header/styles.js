import styled from 'styled-components';

export const Container = styled.header`
  background: #21838E;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    color: #042331;
  }

  button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;