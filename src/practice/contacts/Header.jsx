import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

import logo from '../../logo.svg';

export default class Header extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {
    search: '',
  }

  handleOnChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const { onChange } = this.props;
    onChange(event.target.value);
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row>
          <input placeholder="Nombre" className="search-input" type="text" value={search} onChange={this.handleOnChange} />
        </Row>
      </header>
    );
  }
}
