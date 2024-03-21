import React from 'react';

import { Container } from './styles';

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>Haura's blog. All rights reserved</span>
      <button 
        type="button" 
        onClick={onToggleTheme} 
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}