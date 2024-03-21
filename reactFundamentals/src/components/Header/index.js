import React, { useContext } from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Haura's Blog</h1>
      <button type="button">🌞</button>
    </Container>
  );
}