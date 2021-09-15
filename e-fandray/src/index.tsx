import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { popper } from '@popperjs/core';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);