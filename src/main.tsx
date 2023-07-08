import React from 'react';
import ReactDOM from 'react-dom';
import Chakra from './chakra';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Chakra>
      <App />
    </Chakra>
  </React.StrictMode>,
  document.getElementById('root')
);
