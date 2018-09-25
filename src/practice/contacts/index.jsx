import React from 'react';
import ReactDOM from 'react-dom';

import Profiles from './Profiles';
import Header from './Header';
import './index.css';

export default class App extends React.Component {
  state = {
    users: null,
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8')
      .then(res => res.json())
      .then(({ results }) => this.setState({ users: results }));
  }

  render() {
    const { users } = this.state;
    if (!users) return null;
    return (
      <div className="App">
        <Header />
        <Profiles users={users} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
