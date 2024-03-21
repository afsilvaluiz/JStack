import styled from 'styled-components';

export const Container = styled.article`
  background: #074D5E;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;

  h2 {
    margin: 0 0 8px;
    color: #7EC2C9;
   }

   small {
    opacity: 0.7;
   }

   & + article {
    margin-top: 8px;
   }
`;