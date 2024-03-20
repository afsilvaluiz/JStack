import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
  color: #21838E;
`;

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Change theme
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "Haura's blog",
};