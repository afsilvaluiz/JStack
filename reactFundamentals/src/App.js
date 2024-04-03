import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import GlobalStyle from './styles/global';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';

class App extends React.Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log('componentDidMount executed');
  }

  

  render() {
    console.log('rendered');

    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   };

//   useEffect(() => {
//     localStorage.setItem('theme', JSON.stringify(theme))
//   }, [theme]);

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout 
//         onToggleTheme={handleToggleTheme}
//         selectedTheme={theme}
//       />
//     </ThemeProvider>
//   );
// };

export default App;