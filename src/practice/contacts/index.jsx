import React from 'react';
import ReactDOM from 'react-dom';

import('./App')
  .then(({ default: App }) => {
    ReactDOM.render(<App />, document.getElementById('root'));
    return null;
  });
