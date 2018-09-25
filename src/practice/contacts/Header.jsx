import React from 'react';
import { Button, Row } from 'react-bootstrap';

import logo from '../../logo.svg';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Row>
      <input className="search-input" type="text" />
      <Button>Buscar</Button>
    </Row>
  </header>
);

export default Header;
