import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import cam_token from '../../config.js';

const startingProductId = 59553;

ReactDOM.render(<App startingProductId={startingProductId}/>, document.getElementById('appContainer'));