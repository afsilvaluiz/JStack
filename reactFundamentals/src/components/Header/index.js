import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

function HOC(ComponentHeader) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <ComponentHeader {...value} />
          )}
        </ThemeContext.Consumer>
      );
    }
  }
}

// render props
class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('theme changed')
    }
  }

  render() {
    return (
      <Container>
        <h1>Haura's Blog</h1>
        <button
          type="button"
          onClick={this.props.handleToggleTheme}
        >
          {this.props.theme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}

export default HOC(Header);

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