import React from 'react';
import PropTypes from 'prop-types';

export default class Clock extends React.PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
  }

  static defaultProps = {
    date: null,
  }

  render() {
    const { date } = this.props;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{`Fecha: ${date.toLocaleTimeString()}`}</h2>
      </div>
    );
  }
}
