/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user.name}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = <h1>Hola, {getGreeting()}!</h1>;

ReactDOM.render(element, document.getElementById('root'));
