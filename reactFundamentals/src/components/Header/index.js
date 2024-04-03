import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

// render props
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <Container>
            <h1>Haura's Blog</h1>
            <button
              type="button"
              onClick={value.handleToggleTheme}
            >
              {value.theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// export default function Header({ onToggleTheme, selectedTheme }) {
//   return (
//     <Container>
//       <h1>Haura's Blog</h1>
//       <button 
//         type="button" 
//         onClick={onToggleTheme} 
//       >
//         {selectedTheme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }